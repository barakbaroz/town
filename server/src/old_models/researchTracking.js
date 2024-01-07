"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResearchTracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Token, {
        targetKey: "id",
        foreignKey: "tokenId",
      });
      this.hasMany(models.Research, {
        foreignKey: {
          name: "tokenId",
          field: "tokenId",
        },
      });
    }
  }
  ResearchTracking.init(
    {
      tokenId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      didProcedure: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      gisterGuidance: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ResearchTracking",
      underscored: true,
    }
  );
  return ResearchTracking;
};
