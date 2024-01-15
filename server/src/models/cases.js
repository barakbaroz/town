const { DataTypes } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Cases",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      socialSecurityNumber: DataTypes.STRING(4),
      gender: DataTypes.ENUM("male", "female", "other"),
      age: DataTypes.ENUM("20-50", "50-70", "70+"),
      concentrate: DataTypes.STRING,
      procedureDate: DataTypes.DATEONLY,
      procedureTime: DataTypes.STRING,
    },
    { underscored: true, paranoid: true }
  );

const associations = (sequelize) => {
  const { StaffMembers, Cases, Users, Comments, CasesProgress, Avatar } =
    sequelize.models;
  Cases.belongsTo(StaffMembers, {
    foreignKey: "creatorId",
    onDelete: "CASCADE",
    as: "creator",
  });
  Cases.hasOne(Users, { onDelete: "CASCADE" });
  Cases.hasOne(Comments, { onDelete: "CASCADE" });
  Cases.hasOne(CasesProgress, { onDelete: "CASCADE" });
  Cases.hasOne(Avatar, { onDelete: "CASCADE" });
};

const hooks = (sequelize) => {
  const { Cases, CasesProgress, Avatar } = sequelize.models;
  Cases.afterCreate(async (caseData) => {
    await CasesProgress.create({ CaseId: caseData.id });
    await Avatar.create({ CaseId: caseData.id });
  });
};

module.exports = { init, associations, hooks };
