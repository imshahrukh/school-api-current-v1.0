import { Schema, SchemaTypes, model } from "mongoose";

const Student = new Schema({
  RegNo: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: SchemaTypes.ObjectId,
    ref: "Parent",
  },

  photo: {
    type: String,
    required: true,
  },
});

export default model("Student", Student);
