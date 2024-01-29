require("dotenv").config();
const { StaffMembers } = require("../src/models");

StaffMembers.create({
  email: "tomer@gistmd.com",
  password: "123456",
  name: "Tomer",
  phoneNumber: "0504655047",
}).then(() => console.log("New user added"));
