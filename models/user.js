var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	name: String,
	location: String,
	instrument: String, // check boxes
	// genre: String,
	login: {
		username: String,
		password: String,
	}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;