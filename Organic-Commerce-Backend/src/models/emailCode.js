const mongoose = require("mongoose");

const emailCode = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    verificationCode: {
      type: Number,
      required: true,
    },
    expiresIn: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Code = mongoose.model("EmailCode", emailCode);
module.exports = Code;
