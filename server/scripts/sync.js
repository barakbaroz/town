require("dotenv").config();
const { sequelize } = require("../src/models");

sequelize.sync({ alter: true }).then(() => console.log("sync done"));
