const { StatusCodes } = require("http-status-codes");
const { TicketRepository } = require("../repositories");
const { EmailConfig } = require("../config");
const AppError = require("../utils/errors/app-error");

const ticketRepository = new TicketRepository();

async function sendEmail(data) {
  try {
    const response = await EmailConfig.transporter.sendEmail({
      from: data.from,
      subject: data.subject,
      text: data.text,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Couldn't send email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function createTicket(data) {
  try {
    const ticket = await ticketRepository.create(data);
    return ticket;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Couldn't create ticket",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getPendingTickets() {
  try {
    const response = await ticketRepository.getPendingTickets();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Couldn't fetvh tickets",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  sendEmail,
  createTicket,
  getPendingTickets,
};
