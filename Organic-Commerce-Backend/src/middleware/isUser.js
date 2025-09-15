const createHttpError = require("http-errors");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const User = async (req, res, next) => {
  try {
    const userId = req.cookies.id;

    if (!userId) {
      return next(
        createHttpError(StatusCodes.UNAUTHORIZED, "You're not logged in")
      );
    }

    req.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = User;
