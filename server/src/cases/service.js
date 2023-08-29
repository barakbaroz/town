const {
  Cases,
  Comments,
  Users,
  CasesProgress,
  SmsQueue,
  Avatar,
  StaffMembers,
} = require("../models");
const { Op } = require("sequelize");
const sms = require("../sms/service");

const casesProgressFilter = {
  openSms: {
    where: {
      openSms: { [Op.ne]: null },
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

const zehutFilter = ({ zehutNumber }) =>
  zehutNumber ? { zehutNumber: { [Op.substring]: zehutNumber } } : {};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

module.exports.search = async ({ creatorId, search }) => {
  console.info(`search ${search} by ${creatorId}`);
  const cases = await Cases.findAll({
    include: [
      {
        model: Users,
        attributes: ["id", "language", "phoneNumber"],
      },
      { model: Comments },
      {
        model: CasesProgress,
        attributes: ["openSms", "avatarSelection", "watchedVideo"],
        ...casesProgressFilter[search.patientStatus],
      },
      Avatar,
      {
        model: StaffMembers,
        attributes: ["name"],
        ...casesProgressFilter[search.patientStatus],
      },
    ],
    attributes: [
      "id",
      "zehutNumber",
      "gender",
      "age",
      "concentrate",
      "procedureDate",
      "procedureTime",
      "createdAt",
    ],
    where: {
      ...zehutFilter(search),
      ...dateFilter(search),
      ...myCasesFilter(search, creatorId),
    },
    order: [["createdAt", "DESC"]],
    offset: 0,
    limit: 30,
  });

  return cases;
};

module.exports.create = async ({
  creatorId,
  phoneNumber,
  zehutNumber,
  yearOfBirth,
  concentrate,
  date,
  time,
}) => {
  console.info(`create case by staff member: ${creatorId}`);
  const newCase = await Cases.create({
    creatorId,
    zehutNumber,
    yearOfBirth,
    concentrate,
    procedureDate: date,
    procedureTime: time,
  });
  const CaseId = newCase.dataValues.id;
  const user = await Users.create({ CaseId, phoneNumber });
  await sms.action({ UserId: user.id, actionKey: "create-case" });
  await sms.sendImmediate({ CaseId, type: "caseCreation", phoneNumber });
};

module.exports.deleteCase = async ({ CaseId, staffMembersId }) => {
  console.info(`Delete ${CaseId} by ${staffMembersId}`);
  await Cases.destroy({ where: { id: CaseId } });
  await Users.destroy({ where: { CaseId } });
  const reminders = await SmsQueue.findAll({
    include: { model: Users, where: { CaseId }, paranoid: false },
  });
  reminders.forEach((reminder) => reminder.destroy());
};

module.exports.CommentCase = async ({ CaseId, comment, creatorId }) => {
  console.info(`Post comment  case:${CaseId}  comment:${comment}`);
  await Comments.create({ CaseId, creatorId, message: comment });
};

module.exports.duplicate = async (data) => {
  const { phoneNumber, zehutNumber } = data;
  const caseExists = await Cases.findOne({
    where: { zehutNumber },
    include: { model: Users, where: { phoneNumber } },
  });
  if (caseExists) return "duplicate";
  return "none";
};
