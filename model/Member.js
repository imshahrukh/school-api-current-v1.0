const mongoose = require("mongoose");

const CommitterMember = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true,
  },
  village_Name: {
    type: "String",
    required: true,
    trim: true,
  },
  personal_phon: {
    type: "String",
    max: 12,
    min: 11,
    trim: true,
  },
  relative_phon: {
    type: "String",
    max: 12,
    min: 11,
    trim: true,
  },
  data_of_joining: {
    type: "Date",
    required: true,
    trim: true,
  },
  status: {
    type: "String",
  },
  memberShip_status: {
    type: "Boolean",
  },
});

module.exports = mongoose.model("Committe_Member", CommitterMember);
