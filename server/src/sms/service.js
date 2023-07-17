const { Op } = require("sequelize");
const { independentAction, remindersInfo } = require("./config");
const getMessageTemplate = require("./templates");
const { SmsTracking, SmsQueue, Users, Cases } = require("../models");
const {
  send,
  insertSmsQueueRecords,
  sendSms,
  performAction,
} = require("./utils");

module.exports.sendImmediate = async ({ CaseId, type, phoneNumber }) => {
  const user = await Users.findOne({
    include: Cases,
    where: { CaseId },
  });
  const {text} = remindersInfo[type];
  const message = getMessageTemplate(text, user);
  await sendSms({ message, phoneNumber });
  await SmsTracking.create({ UserId: user.id, type, phoneNumber, message });
};

module.exports.sendReminders = async () => {
  const reminders = await SmsQueue.findAll({
    include: { model: Users, required: true, include: Cases },
    where: { sentReminderTime: { [Op.lt]: new Date() } },
    limit: 100,
  });
  reminders.forEach(send);
};

module.exports.action = async ({ UserId, actionKey }) => {
  const reminders = await SmsQueue.findAll({
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
  await insertSmsQueueRecords(reminderKeys, user);
};
