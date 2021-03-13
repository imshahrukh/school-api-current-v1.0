const Login = require("./../model/Login");
exports.getAllMember = async function (req, res) {
  try {
    var members = await Login.find({
      email: req.body.email,
      password: req.body.password,
    });
    const tot_mem = Object.keys(members).length;
    res.status(201).json({
      status: "success",
      members: tot_mem,
      token: Math.floor(Math.random() * 100000),
      data: {
        login: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.addMember = async function (req, res) {
  try {
    const addMember = await Login.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        login: addMember,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.updateMemberByID = async function (req, res) {
  try {
    var members = await Committe_Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json({
      tatus: "success",
      data: {
        member: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
