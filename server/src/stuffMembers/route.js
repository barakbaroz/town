const express = require("express");
const router = express.Router();
const { login, logout, casesCount } = require("./controller");
const { verifyToken } = require("./authorization");

router.post("/login", login);
router.post("/logout", logout);

router.use(verifyToken);

router.get("/casesCount", casesCount);

module.exports = router;
