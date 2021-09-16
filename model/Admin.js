import { Schema, model } from "mongoose";

const Admin = new Schema({
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  adminId: {
    type: String,
    required: true,
  },
});

export default model("Admin", Admin);
