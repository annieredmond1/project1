// SERVER-SIDE //

// REQUIREMENTS: express framework and additional modules //
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    db = require('./models/index.js');

// MIDDLEWARE //

// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use('/static', express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// express-session has a touch option to update max age
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'SuperSecretCookie',
	cookie: { maxAge: 30 * 60 * 1000 }
}));

// ROUTES //

// show login page
app.get('/login', function (req, res) {
	res.render('login');
});

// show sign-up page
app.get('/signup', function (req, res) {
	res.render('signup');
});

// create new user 
app.post('/users', function (req, res) {
	console.log(req.body);
	User.createSecure(req.body.email, req.body.password, function (err, newUser) {
		req.session.userId = newUser._id;
		res.redirect('/profile');
	});
});

// authenticate the user and set the session
app.post('/sessions', function (req, res) {
  	// call authenticate function to check if password user entered is correct
	User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
		if (err) {
			console.log('authentication error: ', err);
			res.status(500).send();
		} else {
			console.log('setting sesstion user id ', loggedInUser._id);
			req.session.userId = loggedInUser._id;
			res.redirect('/profile');
		}
	});
});

// show user profile page
app.get('/profile', function (req, res) {
	console.log('session user id: ', req.session.userId);
  	// find the user currently logged in
  	User.findOne({_id: req.session.userId}, function (err, currentUser) {
  		if (err) {
  			console.log('database error: ', err);
  			res.redirect('/login');
  		} else {
      		// render profile template with user's data
  			console.log('loading profile of logged in user');
  			res.render('user-show.ejs', {user: currentUser});
  		}
  	});
  });

app.get('/logout', function (req, res) {
	// remove the session user id
	req.session.userId = null;
 	// redirect to login (for now)
  	res.redirect('/login');
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

app.listen(3000, function() {
  console.log("listening on port 3000"); //CHECK
});