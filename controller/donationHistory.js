const Donation_Amount = require("./../model/DonationHistory");

// Methods
// addDonation
// getAllDonation
// updateSubmittedAmount
// updateMemberByID
// addMember

exports.addDonation = async function (req, res) {
  try {
    const addDonations = await Donation_Amount.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        donations: addDonations,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getAllDonation = async function (req, res) {
  try {
    var donations = await Donation_Amount.find();
    res.status(201).json({
      tatus: "success",
      data: {
        donations: donations,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
