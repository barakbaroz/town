"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Token, { foreignKey: "caseId" });
      this.hasMany(models.Comment, { foreignKey: "caseId" });
      // define association here
    }
  }
  Case.init(
    {
      age: DataTypes.STRING,
      avatar: DataTypes.STRING,
      userId: DataTypes.STRING,
      examination: DataTypes.STRING,
      examinationDate: DataTypes.DATE,
      examinationTime: DataTypes.STRING,
      examinationHour: DataTypes.STRING,
      language: DataTypes.STRING,
      gender: DataTypes.STRING,
      zehutNumber: DataTypes.STRING,
      solution: DataTypes.STRING,
      isEnabled: DataTypes.BOOLEAN,
      mainPhoneNumber: DataTypes.STRING,
      secondaryPhoneNumber: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
      deletionTime: DataTypes.DATE,
      fromNamer: DataTypes.BOOLEAN,
      patientKey: DataTypes.STRING,
      namerId: DataTypes.STRING,
      noShowData: DataTypes.STRING,
      fromGister: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Case",
    }
  );
  return Case;
};
