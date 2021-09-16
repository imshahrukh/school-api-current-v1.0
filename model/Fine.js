import { Schema, SchemaTypes, model } from "mongoose";

const Fine = new Schema({
  violations: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Violation",
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

  dueDate: {
    type: String,
    required: true,
  },
});

export default model("Fine", Fine);
