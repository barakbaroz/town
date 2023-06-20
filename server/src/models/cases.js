const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Cases",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      zehutNumber: DataTypes.STRING(4),
      gender: DataTypes.ENUM("male", "female"),
      age: DataTypes.ENUM("0-3", "4-9", "9-18"),
      ethnicity: DataTypes.ENUM("white", "black"),
      creatorId: DataTypes.UUID,
      score: DataTypes.INTEGER,
      preSurgeryDate: DataTypes.DATEONLY,
      surgeryDate: DataTypes.DATEONLY,
    },
    { underscored: true, paranoid: true }
  );

const associations = (sequelize) => {
  const { Cases, Users, Comments, CasesProgress } = sequelize.models;
  Cases.hasMany(Users, { onDelete: "CASCADE" });
  Cases.hasOne(Comments, { onDelete: "CASCADE" });
  Cases.hasOne(CasesProgress, { onDelete: "CASCADE" });
};

const hooks = (sequelize) => {
  const { Cases, CasesProgress } = sequelize.models;
  Cases.afterCreate(async (caseData) =>
    CasesProgress.create({ CaseId: caseData.id })
  );
};

module.exports = { init, associations, hooks };
