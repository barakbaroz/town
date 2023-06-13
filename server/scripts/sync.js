require("dotenv").config();
const { sequelize } = require("../src/models");
const startSync = async () => {
  await sequelize.sync({ force: true });
  console.log("sync done");
};
startSync();
