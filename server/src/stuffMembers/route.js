const express = require("express");
const router = express.Router();
const { login, logout, casesCount, info } = require("./controller");
const { verifyToken } = require("./authorization");

router.post("/login", login);
router.post("/logout", logout);

router.use(verifyToken);

router.get("/casesCount", casesCount);
router.get("/info", info);

module.exports = router;
