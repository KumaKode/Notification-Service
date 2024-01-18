const { StatusCodes } = require("http-status-codes");
const { TicketService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createTicket(req, res) {
  try {
    const ticket = await TicketService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recepientEmail: req.body.recepientEmail,
    });
    SuccessResponse.data = ticket;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createTicket,
};
