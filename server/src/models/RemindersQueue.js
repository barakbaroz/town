const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "RemindersQueue",
    {
      UserId: { primaryKey: true, type: DataTypes.UUID, allowNull: false },
      type: { primaryKey: true, type: DataTypes.STRING, allowNull: false },
      sentReminderTime: DataTypes.DATE,
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Users, RemindersQueue } = sequelize.models;
  RemindersQueue.belongsTo(Users);
};

module.exports = { init, associations };
