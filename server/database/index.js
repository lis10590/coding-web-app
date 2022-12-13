const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const database = mongoose
  .connect(
    "mongodb+srv://lis:liskush105@code-block.dldnatv.mongodb.net/Coding-Web-App",
    options
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => console.error("Error connecting to database:", err.message));

module.exports = database;
