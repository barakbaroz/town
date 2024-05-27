const axios = require("axios");
const { SMS_ACCOUNT_SID, SMS_AUTH_TOKEN, SMS_SENDER_NAME } = process.env;
const defaultSmsObj = {
  UserName: SMS_ACCOUNT_SID,
  Password: SMS_AUTH_TOKEN,
  senderName: SMS_SENDER_NAME,
};

const testingNumbers = [
  "0528033947",
  "0546956695",
  "0584236373",
  "0524084538",
  "0544659401",
  "0512399319",
];

module.exports.send = async ({ message, phoneNumber }) => {
  if (!phoneNumber) return console.warn("No phone number provided to send Sms");
  if (!message) return console.warn("No message provided to send Sms");
  const smsObj = {
    ...defaultSmsObj,
    BodyMessage: message,
    Recipients: [
      {
        Cellphone: testingNumbers.includes(phoneNumber)
          ? phoneNumber
          : `+1${phoneNumber}`,
      },
    ],
  };
  const res = await axios.post("https://restapi.soprano.co.il/api/sms", smsObj);
  if (res.status != 200 || res.data.StatusCode !== 0)
    throw `Sms API response with ${res.data.StatusCode}`;
};
