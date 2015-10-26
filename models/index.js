var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project1");

module.exports.User = require("./user.js");
// module.exports.Band = require("./band.js");