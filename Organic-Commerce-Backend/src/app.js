const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//routing

module.exports = app;
