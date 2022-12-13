const mongoose = require("mongoose");
const { Schema } = mongoose;

const CodeBlockSchema = new Schema({
  title: { type: String },
  codeBlock: { type: Object },
});

const CodeBlock = mongoose.model("CodeBlock", CodeBlockSchema);

module.exports = CodeBlock;
