const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  GMAIL: process.env.GMAIL,
  GPASS: process.env.GPASS,
};
