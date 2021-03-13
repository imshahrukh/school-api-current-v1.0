const mongoose = require("mongoose");

const Amount = new mongoose.Schema({
  committe_amount: {
    type: "Number",
    required: true,
  },
  functions_amount: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("Amount", Amount);
