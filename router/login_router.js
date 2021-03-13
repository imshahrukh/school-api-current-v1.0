const express = require("express");
const loginRouter = express.Router();
const amountController = require("./../controller/loginAdmin");

loginRouter.route("/login").post(amountController.addMember);
loginRouter.route("/login/:id").patch(amountController.updateMemberByID);
loginRouter.route("/login/varify").post(amountController.getAllMember);
module.exports = loginRouter;
