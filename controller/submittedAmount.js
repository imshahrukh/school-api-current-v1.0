const Submitted_Amount = require("./../model/SubmittedAmount");

// Methods
// addSubmittedAmount
// addMemeberForCurrentMonth
// updateSubmittedAmount
// updateMemberByID
// addMember

exports.addSubmittedAmount = async function (req, res) {
  try {
    const addSubmittedAmount = await Submitted_Amount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        submittedAmount: addSubmittedAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getAllAmounts = async function (req, res) {
  try {
    var members = await Submitted_Amount.find();
    const tot_mem = Object.keys(members).length;
    res.status(201).json({
      status: "success",
      total: tot_mem,
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
const dumyJSON = (_id) => {
  return {
    _id_memeber: _id,
    isSubmitted: "",
    submission_date: "",
  };
};
exports.addMemeberForCurrentMonth = async function (req, res) {
  //   get all the user
  //   get date of current month
  //    create a json for each id
  //   loop throuh it and store to database
  try {
    const addSubmittedAmount = await Submitted_Amount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        submittedAmount: addSubmittedAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateSubmittedAmount = async function (req, res) {
  try {
    var updateSubmiitedAmount = await Submitted_Amount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json({
      tatus: "success",
      data: {
        submittedAmount: updateSubmiitedAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
