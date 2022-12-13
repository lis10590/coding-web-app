const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require("./routes");
const mongoose = require("mongoose");

const port = 3001

const origin = "http://localhost:3000";

app.use(
  cors({
    credentials: true,
    origin,
  })
);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  const database = mongoose
    .connect(
      "mongodb+srv://lis:liskush105@code-block.dldnatv.mongodb.net/CodeBlockDB",
      options
    )
    .then(() => console.log("Connected to database."))
    .catch((err) => console.error("Error connecting to database:", err.message));
  
  module.exports = database;

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });