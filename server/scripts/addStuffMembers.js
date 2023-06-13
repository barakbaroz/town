const path = require("path");
const pathToEnv = path.resolve(__dirname, "../.env");
require("dotenv").config({ path: pathToEnv });
const { StaffMembers } = require("../src/models");

const addStaffMembers = async ({ email, password, name, role }) => {
  await StaffMembers.create({ email, password, name, role });
};

addStaffMembers({
  email: "gist@gistmd.com",
  password: "123456",
  name: "משתמש בדיקה",
  role: "coordinator",
});
