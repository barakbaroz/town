const { Cases, StaffMembers, Otp } = require("../models");
const { Op, fn, col } = require("sequelize");
const jwt = require("jsonwebtoken");
const Email = require("../reminders/email");
const emailTemplates = require("../reminders/EmailTemplates");

module.exports.info = async ({ staffMembersId }) => {
  const stuffmemberData = await StaffMembers.findOne({
    attributes: ["name"],
    where: { id: staffMembersId },
  });
  return stuffmemberData;
};

const myCasesFilter = ({ myCases }, creatorId) =>
  myCases ? { creatorId } : {};

module.exports.casesCount = async ({ staffMembersId, search }) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const totalCount = await Cases.findOne({
    where: { ...myCasesFilter(search, staffMembersId) },
    attributes: [[fn("COUNT", col("*")), "count"]],
  });
  const todayCount = await Cases.findOne({
    where: {
      ...myCasesFilter(search, staffMembersId),
      createdAt: { [Op.between]: [startOfToday, endOfToday] },
    },
    attributes: [[fn("COUNT", col("*")), "count"]],
  });

  return {
    totalCases: totalCount.dataValues.count,
    todayCases: todayCount.dataValues.count,
  };
};

const digits = Object.keys([...Array(10)]);
const generateOTP = () =>
  Array.from(
    { length: 6 },
    () => digits[Math.floor(Math.random() * digits.length)]
  ).join("");

module.exports.sendOTP = async (StaffMemberId) => {
  await Otp.destroy({ where: { StaffMemberId } });
  const code = generateOTP();
  await Otp.create({ StaffMemberId, code });
  console.log({ code });
};

const { BASIC_URL, JWT_KEY_STAFF_MEMBERS } = process.env;
module.exports.sendResetPassword = async ({ id, email, name }) => {
  const token = jwt.sign({ id }, JWT_KEY_STAFF_MEMBERS, { expiresIn: "15m" });
  const link = `${BASIC_URL}/ResetPassword?token=${token}`;
  const body = emailTemplates.resetPassword
    .replace("@name@", name)
    .replace("@link@", link);
  Email.send({ to: email, subject: "subject", body });
};
