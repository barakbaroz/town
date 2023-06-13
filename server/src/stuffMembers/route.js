const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { verifyToken } = require("./authorization");

router.post("/login", controller.login);
router.post("/logout", controller.logout);

router.use(verifyToken);

router.get("/info", controller.info);

module.exports = router;
