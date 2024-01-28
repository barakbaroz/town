const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const init = (sequelize) =>
  sequelize.define(
    "Otp",
    { code: { type: DataTypes.STRING, allowNull: false } },
    { underscored: true, updatedAt: false }
  );

const associations = (sequelize) => {
  const { Otp, StaffMembers } = sequelize.models;
  Otp.belongsTo(StaffMembers);
};

const hashCode = async (otp) => {
  const salt = bcrypt.genSaltSync(10, "a");
  otp.code = bcrypt.hashSync(otp.code, salt);
};

const hooks = (sequelize) => {
  const { Otp } = sequelize.models;
  Otp.beforeCreate(hashCode);
};

module.exports = { init, associations, hooks };
