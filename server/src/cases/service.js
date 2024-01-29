const {
  Cases,
  Comments,
  Users,
  CasesProgress,
  RemindersQueue,
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

const remindersFlow = [
  "noReminders",
  "noReminders",
  "three-to-four-days-pre-procedure",
  "three-to-four-days-pre-procedure",
  "five-days-pre-procedure",
  "six-days-pre-procedure",
];
module.exports.search = async ({ creatorId, search }) => {
  console.info(`search ${search} by ${creatorId}`);
  const cases = await Cases.findAll({
    include: [
      {
        model: Users,
        include: Questionnaire,
        attributes: ["id", "language", "phoneNumber"],
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
  const user = await Users.create({ CaseId, phoneNumber });
  const procedureDate = new Date(date);
  const today = new Date().setHours(0, 0, 0, 0);
  const daysToProcedure = Math.floor((procedureDate - today) / dayTime);

  await reminders.action({
    UserId: user.id,
    actionKey:
      remindersFlow[daysToProcedure] || "seven-plus-days-pre-procedure",
  });
  await reminders.sendImmediate({ CaseId, type: "caseCreation", phoneNumber });
  return CaseId;
};

module.exports.update = async ({ id, data }) => {
  await Cases.update(data, { where: { id } });
};

module.exports.deleteCase = async ({ CaseId, staffMembersId }) => {
  console.info(`Delete ${CaseId} by ${staffMembersId}`);
  await Cases.destroy({ where: { id: CaseId } });
  await Users.destroy({ where: { CaseId } });
  const reminders = await RemindersQueue.findAll({
    include: { model: Users, where: { CaseId }, paranoid: false },
  });
  reminders.forEach((reminder) => reminder.destroy());
};

module.exports.CommentCase = async ({ CaseId, comment, creatorId }) => {
  console.info(`Post comment  case:${CaseId}  comment:${comment}`);
  await Comments.create({ CaseId, creatorId, message: comment });
};

module.exports.duplicate = async (data) => {
  const { phoneNumber, socialSecurityNumber } = data;
  const caseExists = await Cases.findOne({
    where: { socialSecurityNumber },
    include: { model: Users, where: { phoneNumber } },
  });
  if (caseExists) return "duplicate";
  return "none";
};
