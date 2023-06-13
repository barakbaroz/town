const {
  Cases,
  Comments,
  Users,
  CasesProgress,
  SmsQueue,
  Instructions,
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
      generalInformationAnswered: { [Op.eq]: null },
    },
  },
  generalInformationAnswered: {
    where: {
      generalInformationAnswered: { [Op.ne]: null },
      [Op.and]: {
        watchedVideoSugarTest: { [Op.eq]: null },
        watchedVideoInsulin: { [Op.eq]: null },
      },
    },
  },
  watchedVideo: {
    where: {
      [Op.or]: {
        watchedVideoSugarTest: { [Op.ne]: null },
        watchedVideoInsulin: { [Op.ne]: null },
      },
    },
  },
};

const zehutFilter = ({ zehutNumber }) =>
  zehutNumber ? { zehutNumber: { [Op.like]: `${search.zehut}%` } } : {};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

module.exports.getCases = async ({ creatorId, search }) => {
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
        attributes: [
          "openSms",
          "generalInformationAnswered",
          "watchedVideoPreSurgery",
          "watchedVideoPostSurgery",
        ],
        ...casesProgressFilter[search.patientStatus],
      },
    ],
    attributes: ["id", "zehutNumber", "gender", "age", "createdAt"],
    where: {
      ...zehutFilter(search),
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
  phase,
  kit,
}) => {
  console.info(`Post case by staff member: ${creatorId}`);
  const newCase = await Cases.create({ zehutNumber, creatorId });
  const CaseId = newCase.dataValues.id;
  const user = await Users.create({ CaseId, phoneNumber });
  await Instructions.create({ CaseId, phase, kit });
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
