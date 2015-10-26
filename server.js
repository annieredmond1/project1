// SERVER-SIDE //

// REQUIREMENTS //
var express = require('express'),
    app = express(),
    path = require('path'), //WHAT IS THIS?
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    // session = require('express-session'),
    db = require('./models/index.js');

// MIDDLEWARE //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use('/static', express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//   saveUninitialized: true,
//   resave: true,
//   secret: 'SuperSecretCookie',
//   cookie: { maxAge: 30 * 60 * 1000 }
// }));


// ROUTES //

// show login page
app.get('/login', function (req, res){
	res.render('login');
});

// show sign-up page
app.get('/signup', function (req, res){
	res.render('signup');
});

// create new user
// app.post('/users', function (req, res){
// 	User.createSecure(req.body.email, req.body.password, function (err, newUser) {
// 	   req.session.userId = newUser._id;
// 	   res.redirect('/profile');
// 	 });
// });


// // show user profile page
// app.get('/profile', function (req, res){
// 	res.render('profile_page');
// });

// // show account details page
// app.get('/account', function (req, res){
// 	res.render('profile_edit');
// });


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


app.listen(3000, function(){
  console.log("listening on port 3000"); //CHECK
});