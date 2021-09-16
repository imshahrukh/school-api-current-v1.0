import { Schema, SchemaTypes, model } from "mongoose";

const School = new Schema({
  // Pending,Paid
  contact: [
    {
      type: String,
      required: true,
    },
  ],
  email: {
    type: String,
    required: true,
  },

  principal: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
});

export default model("School", School);
