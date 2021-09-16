import { Schema, SchemaTypes, model } from "mongoose";

const HomeWork = new Schema({
  // Pending,Paid
  class: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacherId: {
    type: SchemaTypes.ObjectId,
    ref: "Teacher",
  },
  homeWokDescription: {
    type: String,
    required: true,
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

export default model("HomeWork", HomeWork);
