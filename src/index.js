const express = require("express");

const { ServerConfig, Logger, EmailConfig } = require("./config");
const apiRoutes = require("./routes");
const transporter = require("./config/email-config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log("Sucessfully started");
  Logger.info("Successfully started the server", {});

  // const info = await EmailConfig.transporter.sendMail({
  //   from: `"Fred Foo 👻 ${ServerConfig.GMAIL}" `, // sender address
  //   to: "farhadbhai1322@gmail.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body);
  // });

  // console.log(info.messageId);
});
