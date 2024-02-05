const express = require("express");
const router = express.Router();
const {
  create,
  update,
  comment,
  duplicate,
  search,
  deleteCase,
} = require("./controller");
const { verifyToken } = require("../stuffMembers/authorization");

router.use(verifyToken);

router.post("/create", create);
router.put("/update", update);
router.post("/comment", comment);
router.post("/duplicate", duplicate);

router.post("/search", search);

router.delete("/delete", deleteCase);

module.exports = router;
