import { Schema, SchemaTypes, model } from "mongoose";

const Complaint = new Schema({
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
  //
  subject: {
    type: String,
    required: true,
  },
  filedBy: {
    type: SchemaTypes.ObjectId,
    ref: "Teacher",
  },
  description: {
    type: String,
    required: true,
  },
  respondent: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});

export default model("Complaint", Complaint);
