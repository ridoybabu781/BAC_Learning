const app = require("./src/app");
const config = require("./src/config");
const connectDB = require("./src/config/db");

// Connect to the database
connectDB();

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
