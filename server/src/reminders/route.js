const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/sendImmediate", controller.sendImmediate);
router.get("/sendReminders", controller.sendReminders);

module.exports = router;
