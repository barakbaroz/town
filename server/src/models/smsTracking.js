const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "SmsTracking",
    {
      type: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      message: DataTypes.STRING(800),
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Users, SmsTracking } = sequelize.models;
  SmsTracking.belongsTo(Users);
};

module.exports = { init, associations };
