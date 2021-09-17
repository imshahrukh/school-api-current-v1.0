const mongoose = require("mongoose");

const Violation = new mongoose.Schema({
  violations: [
    {
      type: String,
    },
  ],
  // Pending,Paid
  status: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  RegNo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Student",
  },

  date: {
    type: String,
    required: true,
  },

  timeDetected: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Violation", Violation);
