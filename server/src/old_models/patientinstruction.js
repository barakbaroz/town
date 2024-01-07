'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientInstruction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PatientInstruction.init({
    tokenId: DataTypes.INTEGER,
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PatientInstruction',
  });
  return PatientInstruction;
};