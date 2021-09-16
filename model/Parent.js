import { Schema, model } from "mongoose";

const Parent = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  RegNo: {
    type: SchemaTypes.ObjectId,
    ref: "Student",
  },
  visitingPin: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default model("Parent", Parent);
