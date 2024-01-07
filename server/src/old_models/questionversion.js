'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class QuestionVersion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionVersion.init({
    questionId: DataTypes.INTEGER,
    version: DataTypes.INTEGER,
    labels: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'QuestionVersion',
  });
  return QuestionVersion;
};