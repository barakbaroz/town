const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "CasesProgress",
    {
      CaseId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      openSms: DataTypes.DATE,
      generalInformationAnswered: DataTypes.DATE,
      watchedVideoPreSurgery: DataTypes.DATE,
      watchedVideoPostSurgery: DataTypes.DATE,
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { CasesProgress, Cases } = sequelize.models;
  CasesProgress.belongsTo(Cases);
};

module.exports = { init, associations };
