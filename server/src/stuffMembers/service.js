const { Cases } = require("../models");
const { Op, fn, col } = require("sequelize");

module.exports.casesCount = async ({ staffMembersId, role }) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const totalCount = await Cases.findOne({
    where: { creatorId: staffMembersId },
    attributes: [[fn("COUNT", col("*")), "count"]],
  });
  const todayCount = await Cases.findOne({
    where: {
      creatorId: staffMembersId,
      createdAt: { [Op.between]: [startOfToday, endOfToday] },
    },
    attributes: [[fn("COUNT", col("*")), "count"]],
  });

  return {
    totalCases: totalCount.dataValues.count,
    todayCases: todayCount.dataValues.count,
  };
};
