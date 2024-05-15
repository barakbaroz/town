require("dotenv").config();
const { StaffMembers } = require("../src/models");

StaffMembers.create({
  email: "gist@gistmd.com",
  password: "123456",
  name: "User Name",
  phoneNumber: "0528033947",
}).then(() => console.log("New user added"));
