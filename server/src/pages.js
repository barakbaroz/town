const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get("/*", (req, res) => {
  const requestedPath =
    fs.existsSync(`./dist${req.path}`) && req.path != "/"
      ? req.path
      : "/index.html";
  return res
    .setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    .sendFile(path.resolve(`./dist${requestedPath}`));
});

module.exports = router;
