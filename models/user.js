// REQUIREMENTS //
var mongoose = require('mongoose'),
	bcrypt = require('bcrypt');

// DEFINE SCHEMA //
var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	passwordDigest: {
		type: String,
		required: true
	},
	name: String,
	location: String,
	genres: String,
	instruments: String,
	image: {type: String, default: 'http://placehold.it/200x200'}, // URL to image
	summary: String
});

// use form data to create db user, with a hashed and salted password
UserSchema.statics.createSecure = function(email, password, callback) {
    // `this` references our User model
    // store it in variable `UserModel` because `this` changes context in nested callbacks
	var UserModel = this;

	// hash password user enters at sign up
	bcrypt.genSalt(function (err, salt) {
		console.log("salt: ", salt);  // changes every time
		bcrypt.hash(password, salt, function (err, hash) {

	  		// create the new user (save to db) with hashed password
			UserModel.create({
				email: email,
				passwordDigest: hash
			}, callback);
		});
	});
};

// authenticate user (when user logs in)
UserSchema.statics.authenticate = function(email, password, callback) {
	// find user by email entered at log in
  	// remember, this is the User Model
	this.findOne({email: email}, function (err, foundUser) {
		console.log(foundUser);
    	// throw error if can't find user
		if (!foundUser) {
			console.log("No user with email " + email);
			callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
    	// if we found a user, check if password is correct
		} else if (foundUser.checkPassword(password)) {
			callback(null, foundUser);
		} else {
			callback("Error: incorrect password", null);
		}
	});
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function(password) {
  	// run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
	return bcrypt.compareSync(password, this.passwordDigest);
};

// create a new model, then export
var User = mongoose.model('User', UserSchema);
module.exports = User;