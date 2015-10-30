// REQUIREMENTS //
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/project1');

// heroku
mongoose.connect(
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/project1' // plug in the db name you've been using
);

// After creating a new model, require and export it:
module.exports.User = require('./user.js');
// module.exports.Band = require('./band.js');