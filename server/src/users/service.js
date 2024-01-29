const { Op } = require("sequelize");
const {
  Users,
  UserActions,
  Cases,
  CasesProgress,
  Avatar,
  Questionnaire,
} = require("../models");
const reminders = require("../reminders/service");

module.exports.lastStep = async (user) => {
  const { avatarSelection, answeredQuestionnaire } = user.Case.CasesProgress;
  if (answeredQuestionnaire) return "Video";
  if (avatarSelection) return "Questionnaire/diabetesMedicines";
  return "Start";
};

module.exports.getData = async ({ userId }) => {
  return await Users.findByPk(userId, {
    attributes: ["id", "language"],
    include: [
      Questionnaire,
      {
        model: Cases,
        attributes: [
          "id",
          "gender",
          "age",
          "procedureDate",
          "procedureTime",
          "concentrate",
        ],
        include: [CasesProgress, Avatar],
      },
    ],
  });
};

module.exports.update = async ({ id, data }) => {
  const { gender, age, language } = data;
  const caseByUserId = await Cases.findOne({
    include: [{ model: Users, where: { id } }, Avatar],
  });
  await caseByUserId.update({ gender, age });
  await caseByUserId.User.update({ language });
  await caseByUserId.Avatar.update(data.Avatar);
};

const typeToColumn = {
  "opened-link": "openLink",
  "general-information-answered": "avatarSelection",
  "submit-questionnaire": "answeredQuestionnaire",
  "watched-video": "watchedVideo",
  "satisfaction-question-video-helpful": "satisfactionAnswer",
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
  await reminders.action({ UserId, actionKey: type });
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
    await reminders.action({ UserId, actionKey: type });
  }
};

module.exports.updateQuestionnaire = async ({ id, answers }) => {
  this.userAction({ UserId: id, type: "submit-questionnaire" });
  answers.forEach((answer) => (answer.UserId = id));
  await Questionnaire.bulkCreate(answers, {
    updateOnDuplicate: ["answerKey"],
  });
};
