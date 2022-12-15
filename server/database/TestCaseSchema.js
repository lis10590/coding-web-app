const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestCaseSchema = new Schema({
  codeBlock: { type: String },
  tests: { type: Array },
});

const TestCase = mongoose.model("TestCase", TestCaseSchema);

module.exports = TestCase;
