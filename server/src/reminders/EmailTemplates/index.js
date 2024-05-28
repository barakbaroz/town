const fs = require("fs");

const getFile = (name) => fs.readFileSync(__dirname + name, "utf8");

const templates = {
  key: "type",
  resetPassword: {
    subject: "GistMd - Password Reset",
    html: getFile("/resetPassword.html"),
  },
  firstNutritionReminder: {
    subject: "Diet and medication adjustments",
    html: getFile("/en/firstNutritionReminder.html"),
  },
  secondNutritionReminder: {
    subject: "Taking your laxative solution and change to liquid diet ",
    html: getFile("/en/secondNutritionReminder.html"),
  },
};

module.exports = templates;
