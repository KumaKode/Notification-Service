const { StatusCodes } = require("http-status-codes");
const CrudRepository = require("./crud-repository");
const { Ticket } = require("../models");
const AppError = require("../utils/errors/app-error");

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }

  async getPendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: "PENDING",
      },
    });

    if (!response) {
      throw new AppError(
        "Something went wrong",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

    return response;
  }
}

module.exports = TicketRepository;
