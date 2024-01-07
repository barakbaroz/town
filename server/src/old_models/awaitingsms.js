'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AwaitingSms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AwaitingSms.init({
    smsTrackingId: DataTypes.INTEGER,
    toBeSentTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AwaitingSms',
  });
  return AwaitingSms;
};