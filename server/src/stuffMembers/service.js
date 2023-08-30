const { Cases, StaffMembers } = require("../models");
const { Op, fn, col } = require("sequelize");

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
