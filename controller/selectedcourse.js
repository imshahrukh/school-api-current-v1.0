const _COURSE = require("../model/selectedcourse");

exports.addCourse = async function (req, res) {
  try {
    const Course = await _COURSE.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        course: Course,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getCoureseDetailPerReq = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    console.log(query);
    const Teacher = await _COURSE
      .find(query)
      .populate("program")
      .populate("teacher")
      .populate("students")
      .populate("course_id")
      .populate("section")
      .populate("batch")
      .exec();
    console.log(Teacher);
    res.status(201).json({
      status: "success",
      data: {
        course: Teacher,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getCourse = async function (req, res) {
  try {
    const Course = await _COURSE
      .find()
      .populate("program")
      .populate("teacher")
      .populate("students")
      .populate("course_id")
      .populate("section")
      .populate("batch")
      .exec();

    res.status(201).json({
      status: "success",
      data: {
        course: Course,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getCourseByID = async function (req, res) {
  try {
    var Course = await _COURSE.findById(req.params.id);
    res.status(201).json({
      tatus: "success",
      data: {
        course: Course,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateCourseByID = async function (req, res) {
  try {
    var Course = await _COURSE.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        course: Course,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
