const mongoose = require("mongoose");

const AnnualSubmittedAmount = new mongoose.Schema({
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

module.exports = mongoose.model(
  "Annual_Submitted_Amount",
  AnnualSubmittedAmount
);
