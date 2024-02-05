require("dotenv").config();
const { StaffMembers } = require("../src/models");

StaffMembers.create({
  email: "gist@gistmd.com",
  password: Math.random().toString(),
  name: "User Name",
  phoneNumber: "05XXXXXXXX",
}).then(() => console.log("New user added"));
