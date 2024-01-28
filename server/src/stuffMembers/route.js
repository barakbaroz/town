const express = require("express");
const router = express.Router();
const {
  credentials,
  otp,
  logout,
  casesCount,
  info,
  forgotPassword,
  resetPassword,
} = require("./controller");
const { verifyToken } = require("./authorization");

router.post("/credentials", credentials);
router.post("/otp", otp);
router.post("/forgotPassword", forgotPassword);
router.get("/logout", logout);

router.use(verifyToken);

router.post("/resetPassword", resetPassword);
router.post("/casesCount", casesCount);
router.get("/info", info);

module.exports = router;
