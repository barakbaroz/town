const userServices = require("./service");
const jwt = require("jsonwebtoken");

module.exports.getAuthStatus = async (req, res) => {
  try {
    const { userId } = req.body;
    const status = await userServices.getAuthStatus({ userId });
    return res.status(200).send(status);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.entry = async (req, res) => {
  try {
    const { id } = req.params;
    const dbUser = await userServices.getData({ userId: id });
    if (!dbUser) return res.redirect("/notFound");
    userServices.userAction({ UserId: id, type: "opened-link" });
    const token = jwt.sign({ id }, process.env.JWT_KEY_USER);
    const route = await userServices.lastStep(dbUser);
    return res
      .cookie("user_token", token, { httpOnly: true })
      .redirect(`/user/${route}`);
  } catch (error) {
    return res.redirect("/notFound");
  }
};

module.exports.getData = async (req, res) => {
  try {
    const userId = req.user.id;
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
    const { id } = req.user;
    const data = req.body;
    await userServices.update({ id, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.userAction = async (req, res) => {
  try {
    const UserId = req.user.id;
    const { type, data } = req.body;
    await userServices.userAction({ UserId, type, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.userVideoAction = async (req, res) => {
  try {
    const UserId = req.user.id;
    const { type, data } = req.body;
    await userServices.userVideoAction({ UserId, type, data });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.updateQuestionnaire = async (req, res) => {
  try {
    const { id } = req.user;
    const { answers } = req.body;
    await userServices.updateQuestionnaire({ id, answers });
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
