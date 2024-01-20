const { StatusCodes } = require("http-status-codes");
const { TicketService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createTicket(req, res) {
  try {
    const ticket = await TicketService.createTicket({
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.content,
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
