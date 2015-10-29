// SERVER-SIDE //

// REQUIREMENTS: express framework and additional modules //
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	db = require('./models/index.js');

// heroku
mongoose.connect(
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/project1' // plug in the db name you've been using
);

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
	cookie: {maxAge: 30 * 60 * 1000}
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

// show index page: view all users
app.get('/users', function (req, res) {
	db.User.find({}, function (err, users) {
		if (err) {
		// console.log("database error: ", err); //CHECK
		} else {
			// render profile template with user's data
			// console.log("loading profile of logged in user"); //CHECK
			res.render('index', {users: users});
		}
	});
});

// show user profile view page
app.get('/users/:userId', function (req, res) {
	// console.log("session user id: ", req.session.userId); //CHECK
	// find the user currently logged in
	db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
		if (err) {	
			// console.log("database error: ", err); //CHECK
			res.redirect('/login');
		} else {
			// render profile template with user's data
			// console.log("loading profile of logged in user"); //CHECK
			res.render('profile_view', {user: currentUser});
		}
	});
});

// show profile edit page
app.get('/users/:userId/edit', function (req, res) {
	db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
		if (err) {
			// console.log("database error: ", err); //CHECK
			res.redirect('/login');
		} else {
			// render profile editing template with user's data
			res.render('profile_edit', {user: currentUser});
		}
	});
});

// create new user 
app.post('/users', function (req, res) {
	// console.log(req.body); //CHECK
	db.User.createSecure(req.body.email, req.body.password, function (err, newUser) {
		req.session.userId = newUser._id;
		res.json(newUser);
	});
});

// update profile
app.put('/users/:userId', function (req, res) {
	// console.log("user id is: ", req.params); //CHECK
	// console.log("user retrieved"); //CHECK
	db.User.findByIdAndUpdate(req.session.userId,
	{
		name: req.body.name,
		location: req.body.location,
		genres: req.body.genres,
		instruments: req.body.instruments,
        image: req.body.image,
        summary: req.body.summary
	},
	function (err, currentUser) {
		res.redirect('/users/' + req.session.userId);
	});
});

// authenticate the user and set the session
app.post('/sessions', function (req, res) {
	// call authenticate function to check if password user entered is correct
	db.User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
		if (err) {
			// console.log("authentication error: ", err); //CHECK
			res.status(500).send();
		} else {
			// console.log("setting session user id ", loggedInUser._id); //CHECK
			req.session.userId = loggedInUser._id;
			res.json(loggedInUser);
			// res.redirect('/user/' + loggedInUser._id);
		}
	});
});

// logout session
app.get('/logout', function (req, res) {
	// remove the session user id
	req.session.userId = null;
	// redirect to login (for now)
	res.redirect('/login');
});

app.listen(process.env.PORT || 3000);