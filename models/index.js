// REQUIREMENTS //
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/project1');

// After creating a new model, require and export it:
module.exports.User = require('./user.js');
// module.exports.Band = require('./band.js');