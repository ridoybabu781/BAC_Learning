const User = require("../models/user.model");

const adminCheck = async (req, res, next) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (user.role !== "admin") {
      return next(
        createError(StatusCodes.UNAUTHORIZED, "You're not allowed to do that")
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminCheck;
