const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.user_token;
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_KEY_USER);
    return next();
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = { verifyToken };
