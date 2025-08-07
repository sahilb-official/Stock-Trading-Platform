require("dotenv").config();
const jwt = require("jsonwebtoken");

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "12h", // Token expires in 12 hours
  });
};

module.exports = { createSecretToken };