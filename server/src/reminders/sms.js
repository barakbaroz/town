const axios = require("axios");
const {
  SMS_ACCOUNT_SID,
  SMS_AUTH_TOKEN,
  SMS_SENDER_NAME,
  SMS_FROM,
  SMS_MESSAGE_TYPE,
  DEVELOPMENT_TYPE,
  SMS_API_KEY,
} = process.env;
const defaultSmsObj = {
  UserName: SMS_ACCOUNT_SID,
  Password: SMS_AUTH_TOKEN,
};

module.exports.send = async ({ message, phoneNumber }) => {
  if (!phoneNumber) return console.warn("No phone number provided to send Sms");
  if (!message) return console.warn("No message provided to send Sms");
  const developmentMapper = {
    dev: {
      obj_api: {
        ...defaultSmsObj,
        senderName: SMS_SENDER_NAME,
        BodyMessage: message,
        Recipients: [{ Cellphone: phoneNumber }],
      },
      url: "https://restapi.soprano.co.il/api/sms",
    },
    prod: {
      obj_api: {
        ...defaultSmsObj,
        ApiKey: SMS_API_KEY,
        From: SMS_FROM,
        MessageType: SMS_MESSAGE_TYPE,
        Template: message,
        Contacts: [{ To: phoneNumber }],
      },
      url: "https://messenger.soprano.co.il/api/messages/send",
    },
  };

  const { obj_api, url } = developmentMapper[DEVELOPMENT_TYPE];
  const res = await axios.post(url, obj_api);
  if (res.status != 200 || res.data.StatusCode !== 0)
    throw `Sms API response with ${res.data.StatusCode}`;
};
