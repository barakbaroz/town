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
    return res.status(500).send("Server Error");
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
    return res.status(500).send("Server Error");
  }
};

const MaxLoginAttempts = 10;
module.exports.credentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
    });
    if (!staffMembers)
      return res.status(403).send("Email address or password are incorrect.");
    if (staffMembers.failedLoginAttempts >= MaxLoginAttempts)
      return res.status(401).send("User Blocked");
    if (bcrypt.compareSync(password, staffMembers.password)) {
      await service.sendOTP(staffMembers);
      staffMembers.update({ failedLoginAttempts: 0 });
      return res.status(200).send("OTP sended");
    }
    await staffMembers.increment("failedLoginAttempts", { by: 1 });
    return res.status(403).send("Email address or password are incorrect.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
};

const OtpExpires = 1000 * 60 * 5;
const maxAge = 1000 * 60 * 60 * 24 * 30;
module.exports.otp = async (req, res) => {
  try {
    const { email, code } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
      include: {
        model: Otp,
        where: { updatedAt: { [Op.gt]: new Date() - OtpExpires } },
      },
    });
    if (!staffMembers) return res.status(400).send("Otp expired");
    if (bcrypt.compareSync(code, staffMembers.Otp.code)) {
      const { id } = staffMembers;
      const token = jwt.sign({ id }, process.env.JWT_KEY_STAFF_MEMBERS);
      staffMembers.Otp.destroy();
      return res
        .cookie("access_token", token, { httpOnly: true, maxAge })
        .status(200)
        .send("Successfully login");
    }
    return res.status(403).send("incorrect code");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const staffMembers = await StaffMembers.findOne({
      where: { email: email.toLocaleLowerCase() },
    });
    if (!staffMembers)
      return res
        .status(400)
        .send("This email is not associated with an account");
    await service.sendResetPassword(staffMembers);
    return res.status(200).end("email sended");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    const { id } = req.staffMembers;
    const staffMembers = await StaffMembers.findByPk(id);
    if (!staffMembers)
      return res
        .status(400)
        .send("This email is not associated with an account");
    if (newPassword != confirmPassword)
      return res.status(400).send("Password confirmation failed");
    if (!service.ValidatePasswordRequirements(newPassword))
      return res
        .status(400)
        .send("The password does not meet the password policy requirements");
    const salt = bcrypt.genSaltSync(10, "a");
    const password = bcrypt.hashSync(newPassword, salt);
    await staffMembers.update({ password });
    return res.status(200).send("email sended");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
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
    return res.status(500).send("Server Error");
  }
};
