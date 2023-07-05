require("dotenv").config();
const { StaffMembers } = require("../src/models");

StaffMembers.create({
  email: "gist@gistmd.com",
  password: "123456",
  name: "משתמש בדיקה",
  department: "neurosurgery",
  role: "coordinator",
});
