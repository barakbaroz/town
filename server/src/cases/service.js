const {
  Cases,
  Comments,
  Users,
  CasesProgress,
  SmsQueue,
} = require("../models");
const { Op } = require("sequelize");
const sms = require("../sms/service");

module.exports.update = async ({ userId, data }) => {
  const caseByUserId = await Cases.findOne({
    include: {
      model: Users,
      where: { id: userId },
    },
  });
  caseByUserId.update(data);
};

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
    },
  },
  watchedVideo: {
    where: {
      watchedVideo: { [Op.ne]: null },
    },
  },
};

const zehutFilter = ({ zehutNumber }) =>
  zehutNumber ? { zehutNumber: { [Op.like]: `${search.zehut}%` } } : {};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

module.exports.search = async ({ creatorId, search }) => {
  console.info("Get cases service");
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
    ],
    attributes: [
      "id",
      "zehutNumber",
      "gender",
      "age",
      "ethnicity",
      "createdAt",
      "heartConditions",
      "symptoms",
    ],
    where: {
      ...zehutFilter(search),
      ...myCasesFilter(search, creatorId),
    },
    order: [["createdAt", "DESC"]],
    offset: 0,
    limit: 30,
  });

  return cases;
};

module.exports.postCase = async ({
  creatorId,
  phoneNumber,
  zehutNumber,
  symptoms,
  heartConditions,
}) => {
  console.info(`Post case by staff member: ${creatorId}`);
  const newCase = await Cases.create({
    creatorId,
    zehutNumber,
    symptoms,
    heartConditions,
  });
  const CaseId = newCase.dataValues.id;
  const user = await Users.create({ CaseId, phoneNumber });
  const actionKey = "creation";
  await sms.action({ UserId: user.id, actionKey });
  await sms.sendImmediate({ CaseId, type: actionKey, phoneNumber });
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
