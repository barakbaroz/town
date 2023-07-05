const { DataTypes } = require("sequelize");
const { departments } = require("./commonEnums");

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
      age: DataTypes.ENUM("0-2", "3-8", "9-18"),
      ethnicity: DataTypes.ENUM("white", "black"),
      department: DataTypes.ENUM(...departments),
      creatorId: DataTypes.UUID,
      score: DataTypes.INTEGER,
      preSurgery: DataTypes.DATEONLY,
      surgery: DataTypes.DATEONLY,
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
