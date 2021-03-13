const express = require("express");
const DonationRouter = express.Router();
const DonationController = require("./../controller/donationHistory");

DonationRouter.route("/donation")
  .post(DonationController.addDonation)
  .get(DonationController.getAllDonation);

module.exports = DonationRouter;
