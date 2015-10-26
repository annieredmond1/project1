// CLIENT-SIDE //

$(document).ready(function(){

	//LOGIN: existing user
	$('#login-form').on('submit', function (e){
		e.preventDefault();

		// save login form inputs (email, password) as userLogin
		var userLogin = $(this).serialize();
		
		// post new user data
		$.ajax({
			type: 'POST',
			url: '/login',
			data: userLogin,
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


	// // Sign-Up: create new user
	// $('#signup-form').on('submit', function (e){
	// 	e.preventDefault();

	// 	// save sign-up form inputs as user data
	// 	var userData = $(this).serialize();
		
	// 	// post new user data
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/signup',
	// 		data: userData,
	// 		success: function(data){ 
	// 			//CHECK
	// 			// console.log(data);
	// 		},
	// 		error: function(err){
	// 			//CHECK
	// 			// console.log(err);
	// 		},
	// 		complete: function(status){
	// 			window.location.href = "/";
	// 		}
	// 	});
	// });


});