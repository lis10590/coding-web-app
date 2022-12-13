const express = require("express");
const codeBlocks = require("./codeBlocks");

const router = express.Router();

router.use("/codeBlocks", codeBlocks);

module.exports = router;
