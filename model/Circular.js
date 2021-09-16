import { Schema, SchemaTypes, model } from "mongoose";

const Circular = new Schema({
  // Pending,Paid
  classes: [
    {
      type: String,
      required: true,
    },
  ],
  subject: {
    type: String,
    required: true,
  },
  issuedBy: {
    type: SchemaTypes.ObjectId,
    ref: "Admin",
  },

  date: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});

export default model("Circular", Circular);
