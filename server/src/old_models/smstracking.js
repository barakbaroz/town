"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SmsTracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SmsTracking.init(
    {
      type: DataTypes.STRING,
      body: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      tokenid: DataTypes.INTEGER,
      delivered: DataTypes.DATE,
      queued: DataTypes.DATE,
      sent: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "SmsTracking",
    }
  );
  return SmsTracking;
};
