const mongoose = require("mongoose");

const AmountAllocated = new mongoose.Schema({
  _id_member: {
    type: "String",
    require: true,
    trim: true,
  },
  date: {
    type: "Date",
    required: true,
    trim: true,
  },
  amount: {
    type: "String",
    require: true,
    trim: true,
  },
  assign_by: ["String"],
  reason: {
    type: "String",
    require: true,
    trim: true,
  },
  return_applied: {
    type: "Boolean",
    require: true,
  },
  amount_returned: {
    dates: ["String"],
    amount: ["String"],
  },
});
module.exports = mongoose.model("AmountAllocated", AmountAllocated);
