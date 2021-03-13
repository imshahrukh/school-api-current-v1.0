const AllocateAmount = require("./../model/AllocateAmount");

exports.getAllAllocateAmount = async function (req, res) {
  try {
    var allocateAmount = await AllocateAmount.find();
    res.status(201).json({
      status: "success",
      data: {
        allocatedAmount: allocateAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.addAllocatAmount = async function (req, res) {
  try {
    const allocateAmount = await AllocateAmount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        allocatedAmount: allocateAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.updateAllocateAmount = async function (req, res) {
  try {
    var allocateAmount = await AllocateAmount.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json({
      tatus: "success",
      data: {
        allocatedAmount: allocateAmount,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
