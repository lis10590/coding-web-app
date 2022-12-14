const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String },
  socketId: { type: String },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
