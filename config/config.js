require("dotenv").config();
const axios = require("axios");

module.exports = {
  arbi,
  axios,
  OPEN_AI_KEY: process.env.OPEN_AI_KEY,
  MONGODB_URI: process.env.MONGODB_URI,
};
