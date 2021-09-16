import { Schema, SchemaTypes, model } from "mongoose";

const Attendance = new Schema({
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
  time: {
    type: String,
    required: true,
  },
  //
  name: {
    type: String,
    required: true,
  },
});

export default model("Attendance", Attendance);
