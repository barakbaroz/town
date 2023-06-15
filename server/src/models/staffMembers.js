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
      role: DataTypes.STRING,
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Instructions, StaffMembers, Comments } = sequelize.models;
  StaffMembers.hasMany(Instructions, { foreignKey: "creatorId" });
  StaffMembers.hasMany(Comments, { foreignKey: "creatorId" });
};

const hashPassword = async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSaltSync(10, "a");
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
