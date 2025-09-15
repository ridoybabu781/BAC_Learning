const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const errorHandler = require("./middleware/errorHandler");
const adminRouter = require("./routes/admin.routes");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//routing
app.use("/api/auth", userRouter);
app.use("/api/admin", adminRouter);

//error
app.use(errorHandler);

module.exports = app;
