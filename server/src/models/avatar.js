const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Avatar",
    {
      CaseId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      gender: DataTypes.ENUM("male", "female"),
      age: DataTypes.ENUM("young", "middle", "old"),
      ethnicity: DataTypes.ENUM("white", "black", "asian"),
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Cases, Avatar } = sequelize.models;
  Avatar.belongsTo(Cases);
};

module.exports = { init, associations };
