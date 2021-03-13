const express = require("express");
const amountRouter = express.Router();
const amountController = require("./../controller/amount");

amountRouter
  .route("/amount")
  .get(amountController.getAllAmount)
  .post(amountController.addAmount);
amountRouter.route("/amount/:id").patch(amountController.updateAmount);
module.exports = amountRouter;
