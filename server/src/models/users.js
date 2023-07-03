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
      language: { type: DataTypes.STRING, defaultValue: "he" },
    },
    { underscored: true, paranoid: true }
  );

const associations = (sequelize) => {
  const { Users, SmsTracking, Cases, UserActions, Questionnaire } =
    sequelize.models;
  Users.belongsTo(Cases);
  Users.hasMany(UserActions);
  Users.hasMany(SmsTracking, { onDelete: "CASCADE" });
  Users.hasMany(Questionnaire);
};

module.exports = { init, associations };
