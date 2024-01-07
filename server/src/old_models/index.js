"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const pathToEnv = path.resolve(__dirname, "../../.env");
require("dotenv").config({ path: pathToEnv });

const db = {};

const sequelize = new Sequelize(
  process.env.OLD_DB_DATABASE,
  process.env.OLD_DB_USER_NAME,
  process.env.OLD_DB_PASSWORD,
  {
    host: process.env.OLD_DB_HOST,
    dialect: process.env.OLD_DB_DIALECT,
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
