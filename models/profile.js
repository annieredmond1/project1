var mongoose = require("mongoose");
	// bcrypt = require('bcrypt');

var ProfileSchema = new mongoose.Schema({
	name: String,
	location: String,
	genre: String,
	instrument: String // check boxes
});