const nodemailer = require("nodemailer");

const ServerConfig = require("./server-config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: ServerConfig.GMAIL,
    pass: ServerConfig.GPASS,
  },
});

module.exports = {
  transporter,
};
