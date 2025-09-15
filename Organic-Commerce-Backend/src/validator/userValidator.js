const Joi = require("joi");

const verificationEmailValidate = Joi.object({
  email: Joi.string().email().required(),
});

const verificationCodeValidate = Joi.object({
  email: Joi.string().email().required(),
  verificationCode: Joi.string().required(),
});

const createAccountSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().min(2).required(),
  password: Joi.string().required(),
  role: Joi.string().required().default("user"),
});

const loginSchema = Joi.object({
  email: Joi.string().email().min(2).required(),
  password: Joi.string().required(),
});

module.exports = {
  verificationEmailValidate,
  verificationCodeValidate,
  createAccountSchema,
  loginSchema,
};
