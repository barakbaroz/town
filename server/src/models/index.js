const Sequelize = require("sequelize");
const cases = require("./cases");
const users = require("./users");
const avatar = require("./avatar");
const userActions = require("./userActions");
const RemindersTracking = require("./remindersTracking");
const RemindersQueue = require("./remindersQueue");
const staffMembers = require("./staffMembers");
const comments = require("./comments");
const casesProgress = require("./casesProgress");
const questionnaire = require("./questionnaire");
const otp = require("./otp");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

//init
cases.init(sequelize);
users.init(sequelize);
avatar.init(sequelize);
userActions.init(sequelize);
RemindersTracking.init(sequelize);
RemindersQueue.init(sequelize);
staffMembers.init(sequelize);
comments.init(sequelize);
casesProgress.init(sequelize);
questionnaire.init(sequelize);
otp.init(sequelize);

//Associations
cases.associations(sequelize);
users.associations(sequelize);
avatar.associations(sequelize);
userActions.associations(sequelize);
RemindersTracking.associations(sequelize);
RemindersQueue.associations(sequelize);
staffMembers.associations(sequelize);
comments.associations(sequelize);
casesProgress.associations(sequelize);
questionnaire.associations(sequelize);
otp.associations(sequelize);

//Add Hooks
staffMembers.hooks(sequelize);
cases.hooks(sequelize);
otp.hooks(sequelize);

module.exports = { sequelize, ...sequelize.models };
