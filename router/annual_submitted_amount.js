const express = require("express");
const AnnualsubmittedAmountRouter = express.Router();
const submittedAmountController = require("../controller/annualSubmittedAmount");

AnnualsubmittedAmountRouter.route("/annualSubmittedAmount")
  .post(submittedAmountController.addAnnualSubmittedAmount)
  .get(submittedAmountController.getAllAnnualAmounts);

module.exports = AnnualsubmittedAmountRouter;
