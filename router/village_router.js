const express = require("express");
const villageController = require("./../controller/village");
const villageRouter = express.Router();

villageRouter
  .route("/village")
  .post(villageController.addVillage)
  .get(villageController.getAllVillages);
villageRouter.route("/village/:id").get(villageController.getVillageByID);

module.exports = villageRouter;
