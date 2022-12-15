const express = require("express");
const { TestCase } = require("../database/schemas_index");
const router = express.Router();

router.get("/getTestCases", (req, res) => {
  TestCase.find({}, (err, testCasesList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(testCasesList);
  });
});

module.exports = router;
