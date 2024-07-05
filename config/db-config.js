const mongoose = require("mongoose");
require("dotenv").config();

let connection;

const connectDB = async () => {
  if (!connection) {
    try {
      connection = await mongoose.connect("mongodb://127.0.0.1:27017/fruit_management", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`connected database ${mongoose.connection.host}`);
    } catch (error) {
      console.log("connection database failed");
      process.exit(1);
    }
  }
};

module.exports = connectDB;
