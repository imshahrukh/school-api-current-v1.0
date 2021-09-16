import { Schema, SchemaTypes, model } from "mongoose";

const Guard = new Schema({
  // Pending,Paid

  guardId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
});

export default model("Guard", Guard);
