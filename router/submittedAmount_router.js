const express = require("express");
const submittedAmountRouter = express.Router();
const submittedAmountController = require("./../controller/submittedAmount");

submittedAmountRouter
  .route("/submittedAmount")
  .post(submittedAmountController.addSubmittedAmount)
  .get(submittedAmountController.getAllAmounts);
submittedAmountRouter
  .route("/submittedAmount/:id")
  .patch(submittedAmountController.updateSubmittedAmount);
module.exports = submittedAmountRouter;
