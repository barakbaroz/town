const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Users",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      phoneNumber: DataTypes.STRING(15),
      email: DataTypes.STRING,
      language: { type: DataTypes.STRING, defaultValue: "en" },
    },
    { underscored: true, paranoid: true }
  );

const associations = (sequelize) => {
  const {
    Users,
    RemindersTracking,
    Cases,
    UserActions,
    RemindersQueue,
    Questionnaire,
  } = sequelize.models;
  Users.belongsTo(Cases);
  Users.hasMany(UserActions);
  Users.hasMany(RemindersTracking);
  Users.hasMany(RemindersQueue, { onDelete: "CASCADE" });
  Users.hasMany(Questionnaire, { onDelete: "CASCADE" });
};

module.exports = { init, associations };
