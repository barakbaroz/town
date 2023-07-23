const { isUUID } = require("../validator");
const userServices = require("./service");
const jwt = require("jsonwebtoken");

module.exports.entry = async (req, res) => {
  const { id } = req.params;
  const authURL = `/Auth/${id}/zehut`;
  try {
    const token = req.cookies.user_token;
    if (!token) return res.redirect(authURL);
    const user = jwt.verify(token, process.env.JWT_KEY_USER);
    if (user.id != id) return res.redirect(authURL);
    const route = userServices.lastStap({ userId: id });
    return res.redirect(`/user/${route}`);
  } catch (err) {
    return res.redirect(authURL);
  }
};

module.exports.verify = async (req, res) => {
  try {
    const { id, zehutNumber, yearOfBirth } = req.body;
    if (!isUUID(id)) return res.status(400).send("Error");
    const user = await userServices.verify({ id, zehutNumber, yearOfBirth });
    if (!user) return res.status(403).send("verification failed");
    const token = jwt.sign({ id }, process.env.JWT_KEY_USER);
    return res
      .cookie("user_token", token, { httpOnly: true })
      .status(200)
      .send("Successfully verify");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
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
