const fs = require("fs");
const path = require("path");

const resetPassword = fs.readFileSync(
  __dirname + "/resetPassword.html",
  "utf8"
);

const templates = {
  resetPassword,
};

module.exports = templates;
