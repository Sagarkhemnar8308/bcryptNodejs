const express = require("express");
const mongoose = require("mongoose");
const Authenticate = express.Router();
const authService = require("../servises/auth.servise");
const bcrypt = require("bcryptjs");

Authenticate.use(express.json());

Authenticate.post("/login", async (req, resp) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await model.findOne({ username: username });

  if (!user) {
    resp.status(401).json({
      message: "Authentication failed",
    });
  }

  const compare = await bcrypt.compare(password, user.password);
  
  if (compare) {
    resp.status(200).json({message:"Found in MongoDB"});
  } else {
    resp.send("Not Found in MongoDB");
  }

//   authService.login(username, password).then((user) => {
//     console.log("in login routes, after db call", user);

//     if (user == null) {
//       resp.status(500).json({
//         message: "Failed",
//       });
//     } else {
//       resp.status(200).json({
//         message: "Success",
//       });
//     }
//   });
});

const schema = new mongoose.Schema({
  username: String,
  password: String,
});

const model = mongoose.model("user", schema);

Authenticate.post("/post", async (req, resp) => {
  const { username, password } = req.body;

  if (!username || !password) {
    resp.send(" username and password not Entered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = new model({
    username: username,
    password: hashedPassword,
  });

  const result = await data.save();

  console.log(result);

  resp.send("Post Successfully");
});

module.exports = Authenticate;


