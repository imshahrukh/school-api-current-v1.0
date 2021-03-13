const mongoose = require("mongoose");

const SubmittedAmount = new mongoose.Schema({
  _id_memeber: {
    type: "String",
    required: true,
    trim: true,
  },

  submission_date: {
    type: "Date",
    required: true,
  },
});

module.exports = mongoose.model("Submitted_Amount", SubmittedAmount);
