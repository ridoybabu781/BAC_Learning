const { StatusCodes } = require("http-status-codes");

const errorHandler = async (err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "505 Internal Server Error",
  });
  console.log(err);
};

module.exports = errorHandler;
