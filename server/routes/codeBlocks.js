const express = require("express");
const { CodeBlock } = require("../database/schemas_index");
const router = express.Router();

router.get("/getCodeBlocks", (req, res) => {
  CodeBlock.find({}, (err, codeBlockList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(codeBlockList);
  });
});

module.exports = router;
