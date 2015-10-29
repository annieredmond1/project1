// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require('./models/index.js');
	
 //    express = require('express'),
 //    app = express(),
 //    path = require('path'),
 //    bodyParser = require('body-parser'),
 //    mongoose = require('mongoose'),

var userSample = [
	{
		email: '1@test.com',
		passwordDigest: '',
		name: 'David St. Hubbins',
		location: 'San Francisco',
		genres: 'Rock',
		instrument: 'Guitar',
		image: 'http://placehold.it/200x200',
		summary: "Frontman of fictional band Spinal Tap."
	},
	{
		email: '2@test.com',
		passwordDigest: '',
		name: 'Nigel Tufnel',
		location: 'Seattle',
		genres: 'Rock',
		instrument: 'Guitar',
		image: 'http://placehold.it/200x200',
		summary: "Lead Guitarist of fictional band Spinal Tap.",
	},
	{
		email: '3@test.com',
		passwordDigest: '',
		name: 'Derek Smalls',
		location: 'San Francisco',
		genres: 'Jazz',
		instrument: 'bass',
		image: 'http://placehold.it/200x200',
		summary: "Bassist of fictional band Spinal Tap.",
	},
	{
		email: '4@test.com',
		passwordDigest: '',
		name: 'Jeffrey Vanston',
		location: 'Seattle',
		genres: 'Jazz',
		instrument: 'Keyboard',
		image: 'http://placehold.it/200x200',
		summary: "Keyboard guy of fictional band Spinal Tap.",
	},
	{
		email: '5@test.com',
		passwordDigest: '',
		name: 'Greg Bissonette',
		location: 'Seattle',
		genres: 'Jazz',
		instrument: 'Drums',
		image: 'http://placehold.it/200x200',
		summary: "Drummer of fictional band Spinal Tap.",
	}
];

db.User.create(userSample, function (err, users){
	if (err) {
		return console.log(err);
	}
	console.log("created", posts.length, "posts");
	process.exit();
});