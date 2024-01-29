const axios = require("axios");
const { SMS_ACCOUNT_SID, SMS_AUTH_TOKEN, SMS_SENDER_NAME } = process.env;
const defaultSmsObj = {
  UserName: SMS_ACCOUNT_SID,
  Password: SMS_AUTH_TOKEN,
  senderName: SMS_SENDER_NAME,
};

module.exports.send = async ({ message, phoneNumber }) => {
  if (!phoneNumber) return console.warn("No phone number provided to send Sms");
  if (!message) return console.warn("No message provided to send Sms");
  const smsObj = {
    ...defaultSmsObj,
    BodyMessage: message,
    Recipients: [{ Cellphone: phoneNumber }],
  };
  const res = await axios.post("https://restapi.soprano.co.il/api/sms", smsObj);
  if (res.status != 200 || res.data.StatusCode !== 0)
    throw `Sms API response with ${res.data.StatusCode}`;

  console.info(`successfully sent the sms to ${phoneNumber}`);
};
