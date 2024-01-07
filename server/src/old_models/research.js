"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Research extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ResearchTracking, {
        foreignKey: {
          name: "tokenId",
          field: "tokenId",
        },
      });
    }
  }
  Research.init(
    {
      tokenId: { type: DataTypes.INTEGER, primaryKey: true },
      questionnaire: { type: DataTypes.STRING, primaryKey: true },
      answers: DataTypes.JSON,
      index: { type: DataTypes.INTEGER, defaultValue: 1 },
      completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      underscored: true,
      modelName: "Research",
    }
  );
  return Research;
};
