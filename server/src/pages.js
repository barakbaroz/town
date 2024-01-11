const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.static("./dist"));
router.get("*", function (request, response) {
  return response
    .setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    .sendFile(path.resolve("./dist/index.html"));
});

module.exports = router;
