const { Op } = require("sequelize");
const { independentAction, remindersInfo } = require("./config");
const { getMessage } = require("./templates");
const {
  RemindersTracking,
  RemindersQueue,
  Users,
  Cases,
} = require("../models");
const { send, insertRemindersQueueRecords, performAction } = require("./utils");
const Sms = require("./sms");
const Email = require("./email");

module.exports.sendImmediate = async ({ CaseId, type, phoneNumber, email }) => {
  const user = await Users.findOne({
    include: Cases,
    where: { CaseId },
  });
  const { textKey } = remindersInfo[type];
  const message = getMessage(textKey, user);
  await Sms.send({ message, phoneNumber });
  await Email.send({
    to: email,
    subject: "Personalized videos for proper bowel preparation",
    text: message,
  });
  await RemindersTracking.create({
    UserId: user.id,
    type,
    phoneNumber,
    message,
  });
};

module.exports.sendReminders = async () => {
  const reminders = await RemindersQueue.findAll({
    include: { model: Users, required: true, include: Cases },
    where: { sentReminderTime: { [Op.lt]: new Date() } },
    limit: 100,
  });
  const promiseArray = reminders.map(send);
  await Promise.all(promiseArray);
};

module.exports.action = async ({ UserId, actionKey }) => {
  const reminders = await RemindersQueue.findAll({
    include: { model: Users, include: Cases },
    where: { UserId },
  });
  for (const reminder of reminders) {
    await performAction(reminder, actionKey);
  }
  const reminderKeys = independentAction[actionKey];
  if (!reminderKeys) return;
  const user = await Users.findByPk(UserId, { include: Cases });
  if (!user) throw `user id ${UserId} not in Users`;
  await insertRemindersQueueRecords(reminderKeys, user);
};

module.exports.RemoveAllCaseReminders = async (CaseId) => {
  const reminders = await RemindersQueue.findAll({
    include: { model: Users, where: { CaseId }, paranoid: false },
  });
  reminders.forEach((reminder) => reminder.destroy());
};
