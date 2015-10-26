var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	name: String,
	location: String,
	genre: String,
	instrument: String, // check boxes
	login: {
		username: String,
		password: String,
	}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;