var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/project1");

// // heroku
// mongoose.connect(
// 	process.env.MONGOLAB_URI ||
// 	process.env.MONGOHQ_URL ||
// 	'mongodb://localhost/user.js' // plug in the db name you've been using
// );

module.exports.User = require("./user.js");
// module.exports.Band = require("./band.js");