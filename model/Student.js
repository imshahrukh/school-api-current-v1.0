const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  stdName: {
    type: String,
    required: true,
  },
  stdFather: {
    type: String,
    required: true,
  },
  stdEmail: {
    type: String,
    required: true,
  },

  stdPhoneNumber: {
    type: String,
    required: true,
  },

  stdBatch: {
    type: String,
    required: true,
  },
  stdDesignation: {
    type: String,
    required: true,
  },
  stdSemester: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  stdAddress: {
    type: String,
    required: true,
  },
  stdPassword: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Student", Student);
