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

router.delete("/deleteUser", (req, res) => {
  User.findOneAndRemove({ socketId: req.body.userSocketId }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed User : ", doc);
      res.status(200).json({ id: doc._id });
    }
  });
});

module.exports = router;
