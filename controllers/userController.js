const User = require("../models/user");
const bcrypt = require("bcrypt");

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
  const user = await User.findOne({ email: userObj.email });

  if (!user) {
    throw new Error("Invalid Username or Password");
  }

  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(userObj.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid Username or Password");
  }

  // Password is valid, return the user
  return user;
};
