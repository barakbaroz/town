const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { verifyToken } = require("./authorization");

router.post("/verify", controller.verify);

router.use(verifyToken);
router.get("/getData", controller.getData);
router.put("/update", controller.update);
router.post("/userAction", controller.userAction);
router.post("/userVideoAction", controller.userVideoAction);

module.exports = router;
