const { StaffMembers, Otp } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const service = require("./service");
const { Op } = require("sequelize");

module.exports.info = async (req, res) => {
  try {
    const staffMembersId = req.staffMembers.id;
    const result = await service.info({ staffMembersId });
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.casesCount = async (req, res) => {
  try {
    const staffMembersId = req.staffMembers.id;
    const search = req.body;
    const result = await service.casesCount({ staffMembersId, search });
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.credentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
    });
    if (!staffMembers) return res.status(403).end();
    if (bcrypt.compareSync(password, staffMembers.password)) {
      await service.sendOTP(staffMembers);
      return res.status(200).send("OTP sended");
    }
    return res.status(403).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

const OtpExpires = 1000 * 60 * 5;
module.exports.otp = async (req, res) => {
  try {
    const { email, code } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
      include: {
        model: Otp,
        where: { createdAt: { [Op.gt]: new Date() - OtpExpires } },
      },
    });
    if (!staffMembers) return res.status(400).send("");
    if (bcrypt.compareSync(code, staffMembers.Otp.code)) {
      const { id } = staffMembers;
      const token = jwt.sign({ id }, process.env.JWT_KEY_STAFF_MEMBERS);
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .send("Successfully login");
    }
    return res.status(403).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
    });
    if (!staffMembers) return res.status(400).end();
    await service.sendResetPassword(staffMembers);
    return res.status(200).end("email sended");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { id } = req.staffMembers;
    const staffMembers = await StaffMembers.findByPk(id);
    if (!staffMembers) return res.status(400).end();
    await staffMembers.update({ password: newPassword });
    return res.status(200).end("email sended");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.logout = async (req, res) => {
  try {
    return res
      .clearCookie("access_token")
      .status(200)
      .send("Successfully logged");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
