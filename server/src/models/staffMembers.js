const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const init = (sequelize) =>
  sequelize.define(
    "StaffMembers",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: { type: DataTypes.STRING(15), allowNull: false },
      FailedLoginAttempts: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Cases, StaffMembers, Comments, Otp } = sequelize.models;
  StaffMembers.hasMany(Cases, { foreignKey: "creatorId", as: "creator" });
  StaffMembers.hasMany(Comments, { foreignKey: "creatorId" });
  StaffMembers.hasOne(Otp);
};

const hashPassword = async (user) => {
  if (user.password) {
    const salt = bcrypt.genSaltSync(10, "a");
    user.password = bcrypt.hashSync(user.password, salt);
  }
  if (user.email) user.email = user.email.toLocaleLowerCase();
};

const hooks = (sequelize) => {
  const { StaffMembers } = sequelize.models;
  StaffMembers.beforeCreate(hashPassword);
  StaffMembers.beforeUpdate(hashPassword);
};

module.exports = { init, associations, hooks };
