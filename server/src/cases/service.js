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
const { TESTING_NUMBERS } = process.env;

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

const yearOfBirthFilter = ({ yearOfBirth }) =>
  yearOfBirth ? { yearOfBirth: { [Op.substring]: yearOfBirth } } : {};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

const dayTime = 1000 * 60 * 60 * 24;

function getRemindersFlow(date) {
  const procedureDate = new Date(date).setHours(0, 0, 0, 0);
  const createAfter5PM = new Date().getHours() > 17;
  const today = createAfter5PM
    ? new Date(new Date().getTime() + dayTime)
    : new Date();
  today.setHours(0, 0, 0, 0);
  const daysToProcedure = (procedureDate - today) / dayTime;
  if (daysToProcedure < 3) return "noReminders";
  return "three-days-pre-procedure";
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
        attributes: ["openLink", "answeredQuestionnaire", "watchedVideo"],
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
      "yearOfBirth",
      "gender",
      "age",
      "concentrate",
      "procedureDate",
      "procedureTime",
      "createdAt",
    ],
    where: {
      ...yearOfBirthFilter(search),
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
  yearOfBirth,
  concentrate,
  date,
  time,
  email,
}) => {
  console.info(`create case by staff member: ${creatorId}`);
  const { year, month, day } = date;
  const formatDate = new Date(year, month - 1, day);
  const newCase = await Cases.create({
    creatorId,
    yearOfBirth,
    concentrate,
    procedureDate: formatDate,
    procedureTime: time,
  });

  const CaseId = newCase.dataValues.id;
  const newFormatPhone = JSON.parse(TESTING_NUMBERS).includes(phoneNumber)
    ? phoneNumber
    : `+1${phoneNumber}`;
  const user = await Users.create({
    CaseId,
    phoneNumber: newFormatPhone,
    email,
  });
  const actionKey = getRemindersFlow(formatDate);
  await reminders.action({ UserId: user.id, actionKey });
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
  const { yearOfBirth, ...userData } = data;
  const caseExists = await Cases.findOne({
    where: { yearOfBirth },
    include: { model: Users, where: userData },
  });
  if (caseExists) return "duplicate";
  return "none";
};
