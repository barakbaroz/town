const { remindersInfo } = require("./config");
const { RemindersQueue, RemindersTracking } = require("../models");
const SmsTemplates = require("./SmsTemplates");
const EmailTemplates = require("./EmailTemplates");
const Sms = require("./sms");
const Email = require("./email");

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
  const { phoneNumber: userphoneNumber, id } = User;
  const phoneNumber = input || userphoneNumber;
  if (!phoneNumber) return;
  const { textKey } = remindersInfo[type];
  const data = { type: textKey, ...User.Case.dataValues, ...User.dataValues };
  const rawMessage = findTemplate(SmsTemplates, data);
  const message = formatMessage(rawMessage, User);
  await Sms.send({ message, phoneNumber });
  await RemindersTracking.create({ UserId: id, type, phoneNumber, message });
  console.info(`successfully sent the sms to ${phoneNumber}`);
};

module.exports.sendEmail = async (reminder, input) => {
  const { type, User } = reminder;
  const { email: userEmail } = User;
  const email = input || userEmail;
  if (!email) return;
  const { textKey } = remindersInfo[type];
  const data = { type: textKey, ...User.Case.dataValues, ...User.dataValues };
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
