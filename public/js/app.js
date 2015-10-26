// CLIENT-SIDE //

$(document).ready(function(){

	//LOGIN: redirect new users to sign-up
	$('#login-redirect').on('submit', function (e){
		e.preventDefault();

		// send GET request to /login to redirect to /signup
		$.ajax({
			type: 'GET',
			url: '/login',
			success: function(data){ 
				//CHECK
				// console.log(data);
			},
			error: function(err){
				//CHECK
				// console.log(err);
			},
			complete: function(status){
				window.location.href = "/signup";
			}
		});
	});

	//LOGIN: existing user
	$('#login-form').on('submit', function (e){
		e.preventDefault();

		// select login form and serialize its data
		var loginData = $(this).serialize();
		
		// send POST request to /login with the form data
		$.ajax({
			type: 'POST',
			url: '/login',
			data: loginData,
			success: function(data){ 
				//CHECK
				// console.log(data);
			},
			error: function(err){
				//CHECK
				// console.log(err);
			},
			complete: function(status){
				window.location.href = "/";
			}
		});
	});

	//SIGN-UP: create new user
	$('#signup-form').on('submit', function (e){
		e.preventDefault();
	    
	    // select sign-up form and serialize its data
		var signupData = $(this).serialize();
	    
	    // send POST request to /users with the form data
	    $.ajax({
	    	type: 'POST',
	    	url: '/users',
	    	data: signupData,
    		success: function(data){ 
    			//CHECK
    			// console.log(data);
    		},
    		error: function(err){
    			//CHECK
    			// console.log(err);
    		},
    		complete: function(status){
    			window.location.href = "/";
    		}
    	});
	});


});
