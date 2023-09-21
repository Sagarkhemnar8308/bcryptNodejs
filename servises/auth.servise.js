const mongoose = require("mongoose");
const userSchema = require("../models/user.schema");
const bcrypt=require('bcryptjs')


const authService = {
  login: async (username, password) => {
    const user = await userSchema.findOne({
      "username": username,
      "password": password,
    });

    console.log("in login Api");

    console.log(user);

    return user;

  },
};

module.exports=authService;