const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "UserActions",
    {
      type: DataTypes.STRING,
      data: DataTypes.JSONB,
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Users, UserActions } = sequelize.models;
  UserActions.belongsTo(Users);
};

module.exports = { init, associations };
