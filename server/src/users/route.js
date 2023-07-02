const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/getData", controller.getData);
router.put("/update", controller.update);
router.post("/userAction", controller.userAction);
router.post("/userVideoAction", controller.userVideoAction);
router.post("/updateQuestionnaire", controller.updateQuestionnaire);

module.exports = router;
