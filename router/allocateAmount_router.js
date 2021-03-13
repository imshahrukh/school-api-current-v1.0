const express = require("express");
const allocateAmountRouter = express.Router();
const amountController = require("./../controller/allocatedAmount");

allocateAmountRouter
  .route("/allocateAmount")
  .get(amountController.getAllAllocateAmount)
  .post(amountController.addAllocatAmount);

module.exports = allocateAmountRouter;
