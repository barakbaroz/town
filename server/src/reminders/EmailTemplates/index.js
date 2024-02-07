const fs = require("fs");

const resetPasswordHtml = fs.readFileSync(
  __dirname + "/resetPassword.html",
  "utf8"
);
const caseCreationHtml = fs.readFileSync(
  __dirname + "/caseCreation.html",
  "utf8"
);

const templates = {
  key: "type",
  resetPassword: {
    subject: "GistMd - Password Reset",
    html: resetPasswordHtml,
  },
  caseCreation: {
    subject: "Personalized videos for proper bowel preparation",
    html: caseCreationHtml,
  },
  firstVideoReminder: {
    subject: "We remind you to watch the video to prepare better!",
    html: "",
  },
  secondVideoReminder: {
    subject: "Final reminder to watch the bowel preparation instructions video",
    html: "",
  },
  firstNutritionReminder: {
    subject: "Diet and medication adjustments ",
    html: "",
  },
  secondNutritionReminder: {
    subject: "Taking your laxative solution and change to liquid diet ",
    html: "",
  },
};

module.exports = templates;
