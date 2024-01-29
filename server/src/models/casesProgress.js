const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "CasesProgress",
    {
      CaseId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      openLink: DataTypes.DATE,
      avatarSelection: DataTypes.DATE,
      answeredQuestionnaire: DataTypes.DATE,
      watchedVideo: DataTypes.DATE,
      satisfactionAnswer: DataTypes.DATE,
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { CasesProgress, Cases } = sequelize.models;
  CasesProgress.belongsTo(Cases);
};

module.exports = { init, associations };
