const { Op } = require("sequelize");
const {
  Users,
  UserActions,
  Cases,
  CasesProgress,
  Questionnaire,
} = require("../models");
const sms = require("../sms/service");

module.exports.getData = async ({ userId }) => {
  return await Users.findByPk(userId, {
    attributes: ["id", "language"],
    include: [
      {
        model: Cases,
        attributes: [
          "id",
          "gender",
          "age",
          "ethnicity",
          "heartConditions",
          "symptoms",
        ],
      },
    ],
  });
};

module.exports.update = async ({ id, data }) => {
  await Users.update(data, { where: { id } });
  console.log(`user: ${id} updated successfuly`);
};

const typeToColumn = {
  "opened-sms": "openSms",
  "general-information-answered": "avatarSelection",
  "watched-video": "watchedVideo",
};

const updateCasesProgress = async ({ UserId, type }) => {
  const column = typeToColumn[type];
  if (!column) return;
  const caseProgress = await CasesProgress.findOne({
    where: { [column]: { [Op.eq]: null } },
    include: {
      model: Cases,
      required: true,
      include: {
        model: Users,
        where: { id: UserId },
      },
    },
  });
  if (!caseProgress) return;
  await caseProgress.update({ [column]: new Date() });
};

module.exports.userAction = async ({ UserId, type, data }) => {
  await UserActions.create({ UserId, type, data });
  await sms.action({ UserId, actionKey: type });
  await updateCasesProgress({ UserId, type });
};

module.exports.userVideoAction = async ({ UserId, type, data }) => {
  const [actionRecord] = await UserActions.findOrCreate({
    where: { UserId, type },
    defaults: { data: { percentage: 0, location: 0 } },
  });

  const oldPercentage = actionRecord.data.percentage;

  actionRecord.data = {
    percentage: Math.max(actionRecord.data.percentage, data.percentage),
    location: Math.max(actionRecord.data.location, data.location),
  };
  actionRecord.save();

  if (actionRecord.data.percentage >= 75 && oldPercentage < 75) {
    await updateCasesProgress({ UserId, type });
    await sms.action({ UserId, actionKey: type });
  }
};
