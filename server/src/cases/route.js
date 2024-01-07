const express = require("express");
const router = express.Router();
const {
  create,
  update,
  CommentCase,
  duplicate,
  search,
  deleteCase,
  scanNamer,
} = require("./controller");
const { verifyToken } = require("../stuffMembers/authorization");

router.get("/scanNamer", scanNamer);

router.use(verifyToken);

router.post("/create", create);
router.put("/update", update);
router.post("/CommentCase", CommentCase);
router.post("/duplicate", duplicate);

router.post("/search", search);

router.delete("/delete", deleteCase);

module.exports = router;
