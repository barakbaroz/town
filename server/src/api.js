const express = require("express");
const router = express.Router();
const cases = require("./cases/route");
const users = require("./users/route");
const reminders = require("./reminders/route");
const stuffMembers = require("./stuffMembers/route");

router.use("/cases", cases);
router.use("/user", users);
router.use("/reminders", reminders);
router.use("/stuffMembers", stuffMembers);

module.exports = router;
