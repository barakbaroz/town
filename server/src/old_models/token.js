"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Case, {
        foreignKey: {
          name: "caseId",
          field: "id",
        },
      });
      this.hasOne(models.SmsTracking, {
        foreignKey: "tokenid",
      });
      this.hasOne(models.ResearchTracking, {
        foreignKey: "tokenId",
      });
    }
  }
  Token.init(
    {
      caseId: DataTypes.INTEGER,
      isEnabled: DataTypes.BOOLEAN,
      phoneNumber: DataTypes.STRING,
      language: DataTypes.STRING,
      smsSent: DataTypes.DATE,
      watchedVideo: DataTypes.DATE,
      enteredvideo: DataTypes.DATE,
      videoPercentage: DataTypes.REAL,
      answeredForm: DataTypes.DATE,
      signedConfirmation: DataTypes.DATE,
      flowId: DataTypes.INTEGER,
      feedback: DataTypes.BOOLEAN,
      firstTimeEntered: DataTypes.DATE,
      numOfUses: DataTypes.INTEGER,
      numOfVideoWatched: DataTypes.INTEGER,
      termOfConditions: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Token",
    }
  );
  return Token;
};
