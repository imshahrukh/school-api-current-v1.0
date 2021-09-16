import { Schema, SchemaTypes, model } from "mongoose";

const Violation = new Schema({
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
    type: SchemaTypes.ObjectId,
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

export default model("Violation", Violation);
