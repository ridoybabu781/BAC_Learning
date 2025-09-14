const mongoose = require("mongoose");

const emailCode = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    verificationCode: {
      type: Number,
      min: 6,
      required: true,
    },
    expiresIn: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
