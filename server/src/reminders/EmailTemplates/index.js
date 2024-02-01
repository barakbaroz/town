const fs = require("fs");

const resetPassword = fs.readFileSync(
  __dirname + "/resetPassword.html",
  "utf8"
);

const templates = {
  resetPassword,
};

module.exports = templates;
