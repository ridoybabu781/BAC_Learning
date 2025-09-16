const config = require("./index");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;
