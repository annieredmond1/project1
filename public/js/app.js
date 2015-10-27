// CLIENT-SIDE //

$(document).ready(function() {

	//LOGIN: redirect new users to sign-up
	$('#login-redirect').on('submit', function (e) {
		e.preventDefault();
		// send GET request to /login to redirect to /signup
		$.ajax({
			type: 'GET',
			url: '/login',
			success: function(data) { 
				//CHECK
				// console.log(data);
			},
			error: function(err) {
				//CHECK
				// console.log(err);
			},
			complete: function(status) {
				window.location.href = "/signup";
			}
		});
	});

	//LOGIN: existing user
	$('#login-form').on('submit', function (e) {
		e.preventDefault();
		// select login form and serialize its data
		var loginData = $(this).serialize();
		// send POST request to /login with the form data
		$.ajax({
			type: 'POST',
			url: '/sessions',
			data: loginData,
			success: function(data) { 
				//CHECK
				// console.log(data);
				var userId = data._id;
    			window.location.href = "/users/" + userId;
			},
			error: function(err) {
				//CHECK
				// console.log(err);
			}
		});
	});

	//SIGN-UP: create new user
	$('#signup-form').on('submit', function (e) {
		e.preventDefault();
	    // select sign-up form and serialize its data
		var signupData = $(this).serialize();
	    // send POST request to /users with the form data
	    $.ajax({
	    	type: 'POST',
	    	url: '/users',
	    	data: signupData,
    		success: function(data) { 
    			//CHECK
    			console.log(data);
    			var userId = data._id;
    			window.location.href = "/users/" + userId + "/edit";
    		},
    		error: function(err) {
    			//CHECK
    			console.log(err);
    		}
    	});
	});

	//UPDATE profile
	$('#profile-form').on('submit', function (e) {
		e.preventDefault();
		// select profile form and serilize its data
		var profileData = $(this).serialize();
		var userId = $('#userId').val();
		// send PUT request to /users/:id with the form data
		$.ajax({
			type: 'PUT',
			url: '/users/' + userId,
			data: profileData,
			success: function(data) {
				//CHECK
				console.log(data);
				window.location.href = "/users/" + userId;
			},
			error: function(err) {
				//CHECK
				console.log(err);
			}
		});
	});


});