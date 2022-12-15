const express = require("express");
const codeBlocks = require("./codeBlocks");
const users = require("./users");
const testCases = require("./testCases");

const router = express.Router();

router.use("/codeBlocks", codeBlocks);
router.use("/users", users);
router.use("/testCases", testCases);

module.exports = router;
