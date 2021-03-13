const mongoose = require("mongoose");

const VillageName = new mongoose.Schema({
  village_name: {
    type: "String",
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = mongoose.model("Village_Name", VillageName);
