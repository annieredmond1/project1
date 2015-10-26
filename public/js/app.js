// CLIENT-side

$(document).ready(function() {

	// sign-up and create new user
	$('#signup-form').on('submit', function (e) {
		e.preventDefault();

		// save sign-up form inputs as user data
		var userData = $(this).serialize();

		// post new user data
		$.ajax({
			type: 'POST',
			url: '/signup',
			data: userData,
			success: function(data) { 
				console.log(data); // sanity check
			},
			error: function(err) {
				console.log(err); // sanity check
			}
		});
	});







});