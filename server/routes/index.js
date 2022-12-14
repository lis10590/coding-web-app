const express = require("express");
const codeBlocks = require("./codeBlocks");
const users = require("./users");

const router = express.Router();

router.use("/codeBlocks", codeBlocks);
router.use("/users", users);

module.exports = router;
