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
      age: DataTypes.ENUM("20-50", "50-70", "70+"),
      ethnicity: DataTypes.ENUM("white", "black"),
      creatorId: DataTypes.UUID,
      heartConditions: DataTypes.ARRAY(
        DataTypes.ENUM(
          "aortic_valve_regurgitation",
          "aortic_valve_stenosis",
          "atherosclerosis",
          "cardiac_arrhythmia",
          "cardiomyopathy",
          "general",
          "mitral_valve_regurgitation",
          "mitral_valve_stenosis",
          "myocardial_infarction"
        )
      ),
      symptoms: DataTypes.ARRAY(
        DataTypes.ENUM("shortness_of_breath", "edema", "chest_pain")
      ),
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
