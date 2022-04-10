const mongoose = require("mongoose");

const Courses = new mongoose.Schema({
  course_title: {
    type: String,
    required: true,
  },
  course_code: {
    type: String,
    required: true,
  },
  credit_hour: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Courses", Courses);
