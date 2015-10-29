// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var express = require('express'),
    app = express(),
    // path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./models/user.js');

var userSample = [
	{
		name: 'David St. Hubbins',
		location: 'San Francisco',
		instrument: 'Guitar',
	},
	{
		name: 'Nigel Tufnel',
		location: 'San Francisco',
		instrument: 'Guitar',
	},
	{
		name: 'Derek Smalls',
		location: 'San Francisco',
		instrument: 'bass',
	},
	{
		name: 'Jeffrey Vanston',
		location: 'San Francisco',
		instrument: 'Keyboard',
	},
	{
		name: 'Greg Bissonette',
		location: 'San Francisco',
		instrument: 'Drums',
	}
];

db.User.create(userSample, function (err, users){
	//CHECK
	// if (err) {
	// 	return console.log(err);
	// }
	console.log("created", posts.length, "posts");
	process.exit();
});