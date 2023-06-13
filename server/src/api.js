const express = require("express");
const router = express.Router();
const cases = require("./cases/route");
const users = require("./users/route");
const sms = require("./sms/route");
const stuffMembers = require("./stuffMembers/route");

router.use("/cases", cases);
router.use("/users", users);
router.use("/sms", sms);
router.use("/stuffMembers", stuffMembers);

module.exports = router;
