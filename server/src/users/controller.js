const { isUUID } = require("../validator");
const userServices = require("./service");

module.exports.getData = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userServices.getData({ userId });
    if (!user) return res.status(404).send("Not user found");
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.update = async (req, res) => {
  try {
    const { userId, ...data } = req.body;
    await userServices.update({ id: userId, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.userAction = async (req, res) => {
  try {
    const { userId: UserId, type, data } = req.body;
    await userServices.userAction({ UserId, type, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.userVideoAction = async (req, res) => {
  try {
    const { UserId, type, data } = req.body;
    await userServices.userVideoAction({ UserId, type, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.getLastStep = async (req, res) => {
  try {
    const { userId: UserId } = req.body;
    if (!isUUID(UserId)) return res.status(404).send("invalid ID");
    const lastStep = await userServices.getLastStep({ UserId });
    return res.status(200).send(lastStep);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
