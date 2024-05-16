const { remindersInfo } = require("./config");
const { RemindersQueue, RemindersTracking } = require("../models");
const SmsTemplates = require("./SmsTemplates");
const Sms = require("./sms");

const twoDays = 1000 * 60 * 60 * 24 * 2;
function getTimeByUser(timeName, user) {
  switch (timeName) {
    case "today":
    case "now":
      return new Date();
    case "creation":
      return user.getDataValue("createdAt");
    case "procedure":
      return new Date(user.Case.getDataValue("procedureDate"));
    default:
      throw `timeName ${timeName} not found in getTimeByUser`;
  }
}

module.exports.insertRemindersQueueRecords = async (list, user) => {
  const toCreate = list.map((type) => ({
    type,
    UserId: user.id,
    sentReminderTime: calculateDate(
      remindersInfo[type].sendAt,
      user,
      remindersInfo[type].sendTime
    ),
  }));
  await RemindersQueue.bulkCreate(toCreate);
};

module.exports.send = async (reminder) => {
  try {
    const { type, User } = reminder;
    const { onSend } = remindersInfo[type];
    await this.sendSMS(reminder);
    await this.sendEmail(reminder);
    await this.insertRemindersQueueRecords(onSend, User);
    await reminder.destroy();
  } catch (error) {
    console.error(error);
  }
};

module.exports.sendSMS = async (reminder, input) => {
  const { type, User } = reminder;
  const phoneNumber = input || User.phoneNumber;
  if (!phoneNumber) return;
  if (!createdInAcceptedHours(User.Case.createdAt)) return;
  if (!twoDaysOrLess(User.Case.createdAt, User.Case.procedureDate)) return;
  const { textKey } = remindersInfo[type];
  const data = { type: textKey, ...User.Case.dataValues, ...User.dataValues };
  const rawMessage = findTemplate(SmsTemplates, data);
  const message = formatMessage(rawMessage, User);
  await Sms.send({ message, phoneNumber });
  await RemindersTracking.create({
    UserId: User.id,
    type,
    phoneNumber,
    message,
  });
  console.info(`successfully sent the sms to ${phoneNumber}`);
};

module.exports.sendEmail = async (reminder, input) => {
  const { type, User } = reminder;
  const email = input || User.email;
  if (!email) return;
  const data = { type, ...User.Case.dataValues, ...User.dataValues };
  const { html: rawHtml, subject } = findTemplate(EmailTemplates, data);
  const html = formatMessage(rawHtml, User);
  await Email.send({ to: email, subject, html });
  console.info(`successfully sent the email to ${email}`);
};

function getUnitsFormat(units) {
  switch (units) {
    case "days":
    case "day":
      return ["setDate", "getDate"];
    case "hours":
      return ["setHours", "getHours"];
    default:
      throw `${units} not fond in getUnitsFormat`;
  }
}

function calculateDate(string, user, sendTimeInweek) {
  if (string === "immediate") return new Date();
  const [amount, units, sign, fieldName, at, sendTime] = string.split(" ");
  const time = getTimeByUser(fieldName, user);
  const signformt = { after: +amount, before: -amount };
  const [set, get] = getUnitsFormat(units);
  const result = new Date(new Date(time)[set](time[get]() + signformt[sign]));
  if (!(sendTimeInweek || at)) return result;
  const hour = sendTime || sendTimeInweek[result.getDay()];
  const hourSplited = hour.split(":");
  return new Date(result.setHours(...hourSplited, ...Array(4).fill("0")));
}

module.exports.performAction = async (reminder, actionType) => {
  const { type } = reminder;
  const onAction = remindersInfo[type].onAction[actionType];
  if (!onAction) return;
  await this.insertRemindersQueueRecords(onAction, reminder.User);
  await reminder.destroy();
};

const findTemplate = (template, data) => {
  if (template instanceof Object && "key" in template)
    return findTemplate(template[data[template.key]], data);
  return template;
};

//checks if the creationDate is BEFORE 17.00(GMT-4)
const createdInAcceptedHours = (creationDate) => {
  const hours = creationDate.getUTCHours() - 4; // Convert GMT to GMT-4
  return hours < 17;
};

//checks if the procedureDate is at least 3 days after the creationDate (by resetting the hours of each date)
const twoDaysOrLess = (creationDate, procedureDate) => {
  return (
    new Date(procedureDate).setHours(0, 0, 0, 0) -
      creationDate.setHours(0, 0, 0, 0) >
    twoDays
  );
};

module.exports.stringFormat = (string, obj) => {
  return Object.entries(obj).reduce(
    (prev, [key, value]) => prev.replace(`{${key}}`, value),
    string
  );
};

const { BASIC_URL } = process.env;
const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
const formatMessage = (message, user) => {
  const link = `${BASIC_URL}/api/user/entry/${user.id}`;
  const procedureDate = new Date(user.Case.procedureDate).toLocaleString(
    "en-US",
    dateOptions
  );
  const obj = { link, procedureDate };
  return this.stringFormat(message, obj);
};
