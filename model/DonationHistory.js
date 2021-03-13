const mongoose = require("mongoose");

const DonationHistory = new mongoose.Schema({
  _id_member: {
    type: "String",
    required: true,
  },
  donation_date: {
    type: "Date",
    required: true,
  },
  donation_reason: {
    type: "String",
    required: true,
    trim: true,
  },
  donation_amount: {
    type: "Number",
    required: true,
  },
  donation_awarded_by: ["String"],
});

module.exports = mongoose.model("Donation_History", DonationHistory);
