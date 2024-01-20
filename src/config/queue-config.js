const amqplib = require("amqplib");
const { TicketService } = require("../services");

let connection, channel;

async function connectQueue() {
  try {
    connection = await amqplib.connect("amqp://localhost");
    channel = await connection.createChannel();

    await channel.assertQueue("notification_queue");

    await channel.consume("notification_queue", async (data) => {
      console.log(data.content.toString());
      const object = JSON.parse(`${Buffer.from(data.content)}`);
      await TicketService.sendEmail({
        to: object.to,
        subject: object.subject,
        text: object.text,
      });
      channel.ack(data);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectQueue;
