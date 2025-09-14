const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const httpErrors = require("http-errors");

const sendCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return httpErrors(404, "Email not found");
    }
  } catch (error) {
    next(error);
  }
};
