const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Namer",
    {
      patKey: { primaryKey: true, type: DataTypes.STRING },
      appDate: DataTypes.STRING,
      appTime: DataTypes.STRING,
      department: DataTypes.STRING,
      calendar: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      services: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
    }
  );

const associations = (sequelize) => {
  const { Questionnaire, Users } = sequelize.models;
  Questionnaire.belongsTo(Users);
};

module.exports = { init, associations };
