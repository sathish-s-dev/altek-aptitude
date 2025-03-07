$(document).ready(function() {
	console.log("Script.js!");
});

//const apiUrl = "http://localhost:8080/";
const apiUrl = "http://ec2-13-53-175-15.eu-north-1.compute.amazonaws.com:8080/";

function showLoader() {
  document.getElementById('loaderPopup').style.display = 'flex';
}

// Function to hide loader popup
function hideLoader() {
  document.getElementById('loaderPopup').style.display = 'none';
}



function validateEmail() {
	
	var emailInput = $('#email').val();

	var errorMessageElement = document.getElementById('error-message');

	// Check if the email field is empty
	if (emailInput.trim() === '') {
		errorMessageElement.innerHTML = 'Email field cannot be empty';
		return false;
	}
	// Regular expression to validate email format
	else {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Check if the entered email matches the email pattern
		if (!emailRegex.test(emailInput)) {
			errorMessageElement.innerHTML = 'Please enter a valid email address';
			return false;
		}
	}

	// If the email is valid, clear any error message
	errorMessageElement.innerHTML = '';
	// Here you can proceed with sending the email or other actions
	
	sendMail();
	showLoader();
	return true;

}


function sendMail() {
	console.log("In Send Mail");


	var mail = $('#email').val();

	var data = {
		mail: mail
	}
	console.log(data);



	$.ajax({
		url: apiUrl+"sendMail",
		type: "POST",
		contentType: "application/json",
		cache: false,
		data: JSON.stringify(data),     //string data to json format 
		success: function(response) {
			console.log(response);
			$('#email').val('');
			hideLoader();
			appendSuccessPage();
		},
		error: function() {
			console.error("Error Occured");
		}
	});

}



function appendSuccessPage() {

	var json = '';

	json = json + '<div class="content flex items-center justify-center h-[85vh]">';
	json = json + '<div class="wrapper-1 max-w-screen-md mx-auto">';
	json = json + '<div class="wrapper-2 bg-white p-8 rounded-lg shadow-lg text-center">';
	json = json + '<h1 class="text-3xl font-bold mb-2 text-green-600 ks-reg pb-5">Success!</h1>';
	json = json + '<h2 style="font-family:stencil;" class="text-3xl font-semibold mb-4 text-red-600">ALTEK</h2>';
	json = json + '<p class="text-gray-700 mb-2">You will receive a email soon.</p>';
	json = json + '<p class="text-gray-700 mb-4">Check for the credentials and Login for attempting the test</p>';
	json = json + '</div>';
	json = json + '<div class="footer-like mt-4 bg-blue-200 py-2 text-center">';
	json = json + '<p class="text-gray-600">';
	json = json + 'Email not received? <a href="http://ec2-13-53-175-15.eu-north-1.compute.amazonaws.com:8080/sendmail" class="text-blue-600 hover:underline">Click here to send again</a>';
	json = json + '</p>';
	json = json + '</div>';
	json = json + '</div>';
	json = json + '</div>';



	$('#appendSuccessPage').html(json);

}
