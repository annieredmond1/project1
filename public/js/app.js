// CLIENT-SIDE //

$(document).ready(function() {

	//LOGIN: existing user
	$('#login-form').on('submit', function (e) {
		e.preventDefault();
		// select login form and serialize its data
		var loginData = $(this).serialize();
		// send POST request to /login with the form data
		$.ajax({
			method: 'POST',
			url: '/sessions',
			data: loginData,
			success: function(data) {
				// console.log(data); //CHECK
				var userId = data._id;
    			window.location.href = "/users/" + userId;
			},
			error: function(err) {
				// console.log(err); //CHECK
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
	    	method: 'POST',
	    	url: '/users',
	    	data: signupData,
    		success: function(data) {
    			// console.log(data); //CHECK
    			var userId = data._id;
    			window.location.href = "/users/" + userId + "/edit";
    		},
    		error: function(err) {
    			// console.log(err); //CHECK
    		}
    	});
	});

	//UPDATE profile
	$('#profile-form').on('submit', function (e) {
		e.preventDefault();
		// select profile form and serilize its data
		var profileData = $(this).serialize();
		var userId = $('#userId').val();
		// console.log(userId); //CHECK
		// console.log(profileData); //CHECK
		// send PUT request to /users/:id with the form data
		$.ajax({
			method: 'PUT',
			url: '/users/' + userId,
			data: profileData,
			success: function(data) {
				// console.log(data); //CHECK
			},
			error: function(err) {
				// console.log(err); //CHECK
			}
		});
		window.location.href = "/users/" + userId; //WHY does this have to be after ajax instead of under success?
	});
});