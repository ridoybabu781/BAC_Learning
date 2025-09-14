module.exports = {
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_key",
  dbUri: process.env.DB_URI || "mongodb://localhost:27017/organic-commerce",
  port: process.env.PORT || 5500,
};
