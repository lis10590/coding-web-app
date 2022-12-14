const express = require("express");
const { User } = require("../database/schemas_index");
const router = express.Router();

router.get("/getUsers", (req, res) => {
  User.find({}, (err, usersList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(usersList);
  });
});

router.post("/addUser", async (req, res) => {
  const user = req.body;
  const newUser = await new User({
    username: user.username,
    socketId: user.socketId,
  });

  newUser.save((err, savedUser) => {
    if (err || !savedUser) {
      res.status(400).send({ message: "Saving user failed", err });
    } else {
      res.status(200).json(savedUser);
    }
  });
});

module.exports = router;
