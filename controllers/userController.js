const User = require("../models/user");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
require("dotenv").config();

exports.createUser = async (userObj) => {
  // Hash the password before saving the user
  const saltRounds = 10; // Number of salt rounds to use for hashing
  const hashedPassword = await bcrypt.hash(userObj.password, saltRounds);

  // Replace the plain password with the hashed password
  userObj.password = hashedPassword;

  // Create the user
  const result = await User.create(userObj);
  return result;
};

exports.login = async (userObj) => {
  // Find the user by email
  let user = await User.findOne({ email: userObj.email });

  if (!user) {
    throw new Error("Invalid Username or Password");
  }

  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(userObj.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid Username or Password");
  }

  //generate jwt token
  const token = jwt.sign(
    {
      email: _.get(user, "email"),
      userId: _.get(user, "_id"),
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1h' } 
  );
 
  // Password is valid, return the user
  const { email, password, _id } = user;
  return {email,password,_id, token};
};
