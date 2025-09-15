const { StatusCodes } = require("http-status-codes");

const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
      wrap: {
        label: false,
      },
    });
    if (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    req[property] = value;
    next();
  };
};

module.exports = validate;
