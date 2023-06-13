const smsServices = require("./service");

module.exports.sendImmediate = async (req, res) => {
  try {
    const { phoneNumber, CaseId, type } = req.body;
    await smsServices.sendImmediate({ CaseId, type, phoneNumber });
    return res.status(200).send("SMS send");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.sendReminders = async (req, res) => {
  try {
    await smsServices.sendReminders();
    return res.status(200).send("Reminders have been sent");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
