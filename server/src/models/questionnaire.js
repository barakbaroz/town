const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Questionnaire",
    {
      UsersId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      questionKey: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      answer: DataTypes.STRING,
    },
    { underscored: true, paranoid: true }
  );

const associations = (sequelize) => {
  const { Questionnaire, Users } = sequelize.models;
};

module.exports = { init, associations, hooks };
