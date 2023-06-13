const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Instructions",
    {
      CaseId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      phase: { primaryKey: true, type: DataTypes.ENUM("pre", "post") },
      type: DataTypes.ENUM("colostomy", "ileostomy", "urostomy"),
      kit: {
        type: DataTypes.ENUM("generic", "hollister"),
        defaultValue: "generic",
      },
    },
    { underscored: true }
  );

const associations = (sequelize) => {
  const { Instructions, Cases, StaffMembers } = sequelize.models;
  Instructions.belongsTo(StaffMembers, { foreignKey: "creatorId" });
  Instructions.belongsTo(Cases, { onDelete: "CASCADE" });
};

module.exports = { init, associations };
