import { Schema, SchemaTypes, model } from "mongoose";

const LeaveApplication = new Schema({
  // Approved,Not-Approved
  status: {
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
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  signedBy: {
    type: String,
    required: true,
  },

  leaveDays: [
    {
      type: String,
      required: true,
    },
  ],
});

export default model("LeaveApplication", LeaveApplication);
