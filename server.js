// SERVER-side

// REQUIREMENTS //
var express = require('express'),
    app = express(),
    path = require('path'), // What this?
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./models/index.js');

// CONFIG //

// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use('/static', express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES //

// render log-in page
app.get('/login', function (req, res){
	res.render('login');
});

// render sign-up page
app.get('/signup', function (req, res){
	res.render('signup');
});

app.listen(3000, function(){
  console.log("listening on port 3000"); //CHECK
});

// view all users
// app.get('/users', function (req, res){
// 	db.User.find({}, function (err, users){
// 		//CHECK
// 		// if (err) {
// 		// 	console.log(err);
// 		// }
// 		res.render('index', {data: stuff});
// 	});
// });

// // view specific user by id
// app.get('/users/:id', function (req, res){
// 	//CHECK
// 	// console.log("post id is: ", req.params);
//     // console.log("post retrieved");
// 	db.User.find({_id: req.params.id}, function (err, post){
// 		//CHECK
// 		// if (err) {
// 		// 	console.log(err);
// 		// }
// 		res.json(post);
// 	});
// });

// // create new user on sign-up
// app.post('/signup', function (req, res){
// 	//CHECK
// 	// console.log(req.body);
// 	db.User.create(req.body, function (err, user){
// 		//CHECK
// 		// if (err) {
// 		// 	console.log(err);
// 		// }
// 		res.json(user);
// 	});
// });

// // create sample sata
// app.post('/users', function (req, res){
// 	//CHECK
// 	console.log(req.body);
// 	db.User.create(userSample, function (err, users){
// 		//CHECK
// 		if (err) {
// 			console.log(err);
// 		}
// 		res.json(users);
// 	});
// });

// // render profile page
// app.get('/users/:id', function (req,res){
// 	res.render('profile');
// });