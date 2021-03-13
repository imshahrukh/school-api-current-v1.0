const Amount = require("./../model/Amount");
// Methods
// getAllAmount
// updateAmount
exports.addAmount = async function (req, res) {
  try {
    const amount = await Amount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        amounts: amount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getAllAmount = async function (req, res) {
  try {
    var amount = await Amount.find();
    res.status(201).json({
      tatus: "success",
      data: {
        amounts: amount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateAmount = async function (req, res) {
  try {
    var amount = await Amount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      tatus: "success",
      data: {
        amount: amount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
