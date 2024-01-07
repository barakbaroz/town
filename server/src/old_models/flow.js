'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Flow.init({
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    language: DataTypes.INTEGER,
    cause: DataTypes.STRING,
    playlistId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flow',
  });
  return Flow;
};