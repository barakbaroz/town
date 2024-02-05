const { remindersInfo } = require("./config");
const { RemindersQueue, RemindersTracking } = require("../models");
const { getMessage, getSubject } = require("./templates");
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
    await sendSMS(reminder);
    await sendEmail(reminder);
    await this.insertRemindersQueueRecords(onSend, User);
    await reminder.destroy();
  } catch (error) {
    console.error(error);
  }
};

async function sendSMS(reminder) {
  const { UserId, type, User } = reminder;
  const { phoneNumber } = User;
  if (!phoneNumber) return;
  const { textKey } = remindersInfo[type];
  const message = getMessage(textKey, User);
  await Sms.send({ message, phoneNumber });
  await RemindersTracking.create({ UserId, type, phoneNumber, message });
}

async function sendEmail(reminder) {
  const { type, User } = reminder;
  const { email } = User;
  if (!email) return;
  const { textKey } = remindersInfo[type];
  const text = getMessage(textKey, User);
  const subject = getSubject(textKey);
  await Email.send({ to: email, subject, text });
}

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
