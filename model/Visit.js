import { Schema, SchemaTypes, model } from "mongoose";

const Visit = new Schema({
  // Pending,Paid

  visitorName: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },

  timeIn: {
    type: String,
    required: true,
  },

  timeOut: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  registeredBy: {
    type: SchemaTypes.ObjectId,
    ref: "Guard",
  },
});

export default model("Visit", Visit);
