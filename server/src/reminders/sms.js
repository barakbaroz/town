const axios = require("axios");
const {
  SMS_ACCOUNT_SID,
  SMS_AUTH_TOKEN,
  SMS_FROM,
  SMS_MESSAGE_TYPE,
  SMS_API_KEY,
} = process.env;
const defaultSmsObj = {
  UserName: SMS_ACCOUNT_SID,
  Password: SMS_AUTH_TOKEN,
  ApiKey: SMS_API_KEY,
  From: SMS_FROM,
  MessageType: SMS_MESSAGE_TYPE,
};

module.exports.send = async ({ message, phoneNumber }) => {
  if (!phoneNumber) return console.warn("No phone number provided to send Sms");
  if (!message) return console.warn("No message provided to send Sms");
  const smsObj = {
    ...defaultSmsObj,
    Template: message,
    Contacts: [{ To: phoneNumber }],
  };
  const res = await axios.post(
    "https://messenger.soprano.co.il/api/messages/send",
    smsObj
  );
  if (res.status != 200 || res.data.StatusCode !== 0)
    throw `Sms API response with ${res.data.StatusCode}`;
};
