const {
  Cases,
  Comments,
  Users,
  CasesProgress,
  Avatar,
  StaffMembers,
  Questionnaire,
} = require("../models");
const { Op } = require("sequelize");
const reminders = require("../reminders/service");

const casesProgressFilter = {
  openLink: {
    where: {
      openLink: { [Op.ne]: null },
      avatarSelection: { [Op.eq]: null },
    },
  },
  avatarSelection: {
    where: {
      avatarSelection: { [Op.ne]: null },
      watchedVideo: { [Op.eq]: null },
    },
  },
  watchedVideo: {
    where: {
      watchedVideo: { [Op.ne]: null },
    },
  },
};
const dateFilter = ({ date }) => (date ? { procedureDate: date } : {});

const SSNFilter = ({ socialSecurityNumber }) =>
  socialSecurityNumber
    ? { socialSecurityNumber: { [Op.substring]: socialSecurityNumber } }
    : {};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

const dayTime = 1000 * 60 * 60 * 24;

function getRemindersFlow(date) {
  const procedureDate = new Date(date);
  const today = new Date().setHours(0, 0, 0, 0);
  const daysToProcedure = Math.floor((procedureDate - today) / dayTime);
  switch (daysToProcedure) {
    case 0:
    case 1:
      return "noReminders";
    case 2:
    case 3:
      return "three-to-four-days-pre-procedure";
    case 4:
      return "five-days-pre-procedure";
    case 5:
      return "six-days-pre-procedure";
    default:
      return "seven-plus-days-pre-procedure";
  }
}

module.exports.search = async ({ creatorId, search }) => {
  console.info(`search ${search} by ${creatorId}`);
  const cases = await Cases.findAll({
    include: [
      {
        model: Users,
        include: Questionnaire,
        attributes: ["id", "language", "phoneNumber", "email"],
      },
      { model: Comments },
      {
        model: CasesProgress,
        attributes: ["openLink", "avatarSelection", "watchedVideo"],
        ...casesProgressFilter[search.patientStatus],
      },
      Avatar,
      {
        model: StaffMembers,
        attributes: ["name"],
        as: "creator",
      },
    ],
    attributes: [
      "id",
      "socialSecurityNumber",
      "gender",
      "age",
      "concentrate",
      "procedureDate",
      "procedureTime",
      "createdAt",
    ],
    where: {
      ...SSNFilter(search),
      ...dateFilter(search),
      ...myCasesFilter(search, creatorId),
    },
    order: [["createdAt", "DESC"]],
    offset: 0,
  });

  return cases;
};

module.exports.create = async ({
  creatorId,
  phoneNumber,
  socialSecurityNumber,
  concentrate,
  date,
  time,
  email,
}) => {
  console.info(`create case by staff member: ${creatorId}`);
  const newCase = await Cases.create({
    creatorId,
    socialSecurityNumber,
    concentrate,
    procedureDate: date,
    procedureTime: time,
  });
  const CaseId = newCase.dataValues.id;
  const user = await Users.create({ CaseId, phoneNumber, email });
  const actionKey = getRemindersFlow(date);
  await reminders.action({ UserId: user.id, actionKey });
  await reminders.sendImmediate({
    CaseId,
    type: "caseCreation",
    phoneNumber,
    email,
  });
  return CaseId;
};

module.exports.update = async ({ id, data }) => {
  await Cases.update(data, { where: { id } });
};

module.exports.deleteCase = async ({ CaseId, staffMembersId }) => {
  console.info(`Delete ${CaseId} by ${staffMembersId}`);
  await reminders.RemoveAllCaseReminders(CaseId);
  await Cases.destroy({ where: { id: CaseId } });
  await Users.destroy({ where: { CaseId } });
};

module.exports.CommentCase = async ({ CaseId, text }) => {
  console.info(`Post comment  case:${CaseId}  comment:${text}`);
  await Comments.upsert({ CaseId, text });
};

module.exports.duplicate = async (data) => {
  const { socialSecurityNumber, ...userData } = data;
  const caseExists = await Cases.findOne({
    where: { socialSecurityNumber },
    include: { model: Users, where: userData },
  });
  if (caseExists) return "duplicate";
  return "none";
};
