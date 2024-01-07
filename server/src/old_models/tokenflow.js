'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokenFlow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TokenFlow.init({
    tokenId: DataTypes.INTEGER,
    flows: DataTypes.ARRAY(DataTypes.JSON),
    locations: DataTypes.ARRAY(DataTypes.JSON),
    sessions: DataTypes.ARRAY(DataTypes.JSON)
  }, {
    sequelize,
    modelName: 'TokenFlow',
  });
  return TokenFlow;
};