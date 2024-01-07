'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BehaviourAnalytics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BehaviourAnalytics.init(
    {
      buttonClicked: DataTypes.STRING,
      tokenId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BehaviourAnalytics',
    }
  );
  return BehaviourAnalytics;
};
