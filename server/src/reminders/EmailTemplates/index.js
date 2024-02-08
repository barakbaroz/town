const fs = require("fs");

const getFile = (name) => fs.readFileSync(__dirname + name, "utf8");

const templates = {
  key: "type",
  resetPassword: {
    subject: "GistMd - Password Reset",
    html: getFile("/resetPassword.html"),
  },
  caseCreation: {
    subject: "Personalized videos for proper bowel preparation",
    html: getFile("/en/caseCreation.html"),
  },
  firstVideoReminder: {
    subject: "We remind you to watch the video to prepare better!",
    html: getFile("/en/firstVideoReminder.html"),
  },
  secondVideoReminder: {
    subject: "Final reminder to watch the bowel preparation instructions video",
    html: getFile("/en/secondVideoReminder.html"),
  },
  firstNutritionReminder: {
    subject: "Diet and medication adjustments",
    html: getFile("/en/firstVideoReminder.html"),
  },
  secondNutritionReminder: {
    subject: "Taking your laxative solution and change to liquid diet ",
    html: getFile("/en/secondNutritionReminder.html"),
  },
};

module.exports = templates;
