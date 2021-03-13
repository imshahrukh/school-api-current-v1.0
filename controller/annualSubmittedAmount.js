const Submitted_Amount = require("../model/AnnualSubmittedAmount");

// Methods
// addSubmittedAmount
// addMemeberForCurrentMonth
// updateSubmittedAmount
// updateMemberByID
// addMember

exports.addAnnualSubmittedAmount = async function (req, res) {
  try {
    const addSubmittedAmount = await Submitted_Amount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        annual_amounts: addSubmittedAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getAllAnnualAmounts = async function (req, res) {
  try {
    var members = await Submitted_Amount.find();
    const tot_mem = Object.keys(members).length;
    res.status(201).json({
      status: "success",
      total: tot_mem,
      data: {
        annual_amounts: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
