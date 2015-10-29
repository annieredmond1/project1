// This file seeds application with data
// run: `node seed.js` from the root of this project folder.

// REQUIREMENTS //
var db = require('./models/index.js'),
	mongoose = require('mongoose');

db.User.remove({}, function (err, users) {
	console.log("existing documents removed");
	// clear database collection along with indexes '_id = null'
	mongoose.connection.collections.users.drop(function (err) {
		console.log("collection dropped");
	});
	// create seed data using sample
	db.User.create(userSample, function (err, users) {
		if (err) {
			return console.log(err);
		}
		console.log("created", users.length, "users");
		process.exit();
	});
});

// SEED DATA
var userSample = [
	{
		name: 'David St. Hubbins',
		location: 'San Francisco',
		genres: 'Rock',
		instruments: 'Guitar',
		summary: 'Frontman of fictional band Spinal Tap.'
	},
	{
		name: 'Nigel Tufnel',
		location: 'Seattle',
		genres: 'Rock',
		instruments: 'Guitar',
		summary: 'Lead Guitarist of fictional band Spinal Tap.'
	},
	{
		name: 'Derek Smalls',
		location: 'San Francisco',
		genres: 'Jazz',
		instruments: 'bass',
		summary: 'Bassist of fictional band Spinal Tap.'
	},
	{
		name: 'Jeffrey Vanston',
		location: 'Seattle',
		genres: 'Jazz',
		instruments: 'Keyboard',
		summary: 'Keyboard guy of fictional band Spinal Tap.'
	},
	{
		name: 'Greg Bissonette',
		location: 'Seattle',
		genres: 'Jazz',
		instruments: 'Drums',
		summary: 'Drummer of fictional band Spinal Tap.'
	}
];