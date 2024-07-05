const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
  //   cdate: {
  //     type: Date,
  //     default: Date.now(),
  //   },
  //   cby: {
  //     type: String,
  //   },
});

module.exports = mongoose.model("users", userSchema);
