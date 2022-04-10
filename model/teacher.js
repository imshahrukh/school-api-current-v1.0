const mongoose = require("mongoose");

const Teacher = new mongoose.Schema({
  tch_name: {
    type: String,
    required: true,
  },
  tch_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Member",
  },
});
module.exports = mongoose.model("Teacher", Teacher);
