const { StatusCodes } = require("http_status_codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    sucess: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
