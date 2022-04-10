const _ANNOUNCEMENT = require("../model/announcemment");

exports.addAnnouncment = async function (req, res) {
  try {
    console.log(req.body);
    const announcment = await _ANNOUNCEMENT.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        announcment: announcment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAnnouncment = async function (req, res) {
  try {
    const announcment = await _ANNOUNCEMENT.find();

    res.status(201).json({
      status: "success",
      data: {
        announcment: announcment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateAnnouncment = async function (req, res) {
  try {
    var member = await _ANNOUNCEMENT.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json({
      status: "success",
      data: {
        announcment: member,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteAnnoucment = async function (req, res) {
  try {
    var member = await _ANNOUNCEMENT.findByIdAndRemove(req.params.id);

    res.status(201).json({
      status: "success",
      data: {
        announcment: member,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
