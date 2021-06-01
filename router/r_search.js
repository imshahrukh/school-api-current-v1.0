const express = require("express");
const c_serviceProvider = require("../controller/c_servericeProvider");
const r_search = express.Router();

r_search.route("/search").post(c_serviceProvider.searchServiceProvider);
module.exports = r_search;
