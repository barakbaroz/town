const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "RemindersTracking",
    {
      type: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      message: DataTypes.STRING(800),
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Users, RemindersTracking } = sequelize.models;
  RemindersTracking.belongsTo(Users);
};

module.exports = { init, associations };
