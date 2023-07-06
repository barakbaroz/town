const casesServices = require("./service");

module.exports.update = async (req, res) => {
  try {
    const { body } = req;
    const { userId, ...data } = body;
    await casesServices.update({ userId, data });
    return res.status(200).json("updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in Update Cases");
  }
};

module.exports.search = async (req, res) => {
  try {
    const { id: creatorId, role, department } = req.staffMembers;
    const { search } = req.body;
    const cases = await casesServices.search({
      creatorId,
      search,
      role,
      department,
    });
    return res.status(200).json(cases);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in Get Cases");
  }
};

module.exports.postCase = async (req, res) => {
  console.info("Post Case");
  try {
    const { id: creatorId, department } = req.staffMembers;
    const { body } = req;
    await casesServices.postCase({ creatorId, department, ...body });
    return res.status(200).send("Case Created");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in Post Case");
  }
};

module.exports.deleteCase = async (req, res) => {
  try {
    const { id: staffMembersId } = req.staffMembers;
    const { CaseId } = req.body;
    await casesServices.deleteCase({ CaseId, staffMembersId });
    return res.status(200).send("Cases Deleted");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in Delete Case");
  }
};
module.exports.CommentCase = async (req, res) => {
  try {
    const { id: creatorId } = req.staffMembers;
    const { CaseId, comment } = req.body;
    await casesServices.CommentCase({ CaseId, comment, creatorId });
    return res.status(response.status).send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in Post Comments");
  }
};

module.exports.duplicate = async (req, res) => {
  try {
    const { body } = req;
    const duplicateStatus = await casesServices.duplicate(body);
    return res.status(200).send(duplicateStatus);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error in duplicate");
  }
};
