const remindersServices = require("./service");

module.exports.sendImmediate = async (req, res) => {
  try {
    const { phoneNumber, CaseId, type } = req.body;
    await remindersServices.sendImmediate({ CaseId, type, phoneNumber });
    return res.status(200).send("Reminder send");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.sendReminders = async (req, res) => {
  try {
    await remindersServices.sendReminders();
    return res.status(200).send("Reminders have been sent");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
