const _SCHOLERSHIP = require("../model/scholership");

exports.addScholership = async function (req, res) {
  try {
    console.log(req.body);
    const scholership = await _SCHOLERSHIP.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        scholership: scholership,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getScholership = async function (req, res) {
  try {
    const scholership = await _SCHOLERSHIP.find();

    res.status(201).json({
      status: "success",
      data: {
        scholership: scholership,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateScholerrship = async function (req, res) {
  try {
    var member = await _SCHOLERSHIP.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        scholership: member,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteScholerrship = async function (req, res) {
  try {
    var member = await _SCHOLERSHIP.findByIdAndRemove(req.params.id);

    res.status(201).json({
      status: "success",
      data: {
        scholership: member,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
