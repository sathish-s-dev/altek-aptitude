$(document).ready(function() {
	console.log("Login.js !");
});


//const apiUrl = "http://localhost:8080/";
const apiUrl = "http://ec2-13-53-175-15.eu-north-1.compute.amazonaws.com:8080/";

// Encryption function
function encryptData(data, key) {
	return CryptoJS.AES.encrypt(data, key).toString();
}

// Decryption function
function decryptData(encryptedData, key) {
	var decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
	return decryptedBytes.toString(CryptoJS.enc.Utf8);
}


var encryptionKey = "Altek*2486******";


// Function to modify the secret key while setting
function modifyKey(key) {
	// Add characters at 10th index, beginning, and end
	key = key.slice(0, 10) + "ABC" + key.slice(10);
	key = "X" + key + "Y"; // Add characters at the beginning and end
	return key;
}

// Function to retrieve the secret key and remove modifications
function retrieveKey(key) {
	// Remove characters added at the beginning and end
	key = key.slice(1, -1);
	// Remove characters added at 10th index
	key = key.slice(0, 10) + key.slice(13);
	return key;
}





// Get the input element
var input = document.getElementById("password");

// Add event listener for keydown event
input.addEventListener("keydown", function(event) {
	// Check if the key pressed is Enter (key code 13)
	if (event.keyCode === 13) {
		// Call your function here
		authenticateUserLogin();
	}
});


function authenticateUserLogin() {
	console.log("login");

	var mail = $('#email').val();
	var password = $('#password').val();

	var data = {
		mail: mail,
		password: password
	}
	console.log(data);


	$.ajax({
		url: apiUrl+"authenticateUserLogin",
		type: "POST",
		contentType: "application/json",
		cache: false,
		data: JSON.stringify(data),     //string data to json format 
		success: function(response) {
			console.log(response);
			$('#secretusername').val(modifyKey(encryptData(mail, encryptionKey)));
			$('#secretpassword').val(modifyKey(encryptData(password, encryptionKey)));
			if (response.includes("testpaper")) {
				loadTestPaper(response);
			}
		},
		error: function() {
			console.error("Error Occured");
			console.log(url);
		}
	});
}


function loadTestPaper(testpaper) {
	console.log("In loadTestPaper");
	$.ajax({
		url: apiUrl+"loadtest/" + testpaper,
		type: "GET",
		contentType: "application/json",
		cache: false,
		success: function(response) {
		//	console.log(response);
			$('#appendTestPaper').html(response);
		},
		error: function() {
			console.error("Error Occured");
		}
	});

}


function validateResults() {

	var testpaper = $('#testpaper').val();
	var username = $('#secretusername').val();
	var password = $('#secretpassword').val();
	console.log(testpaper);
	console.log(username);
	console.log(password);

	var formData = {};
	formData['username'] = decryptData(retrieveKey(username), encryptionKey);
	formData['password'] = decryptData(retrieveKey(password), encryptionKey);
	formData['testpaper'] = testpaper;
	// Loop through each question and get the selected value

	for (var i = 1; i <= 50; i++) {
		// Get the value of the checked radio button for the current question
		var questionValue = $('input[name="question' + i + '"]:checked').val();
		// Check if a radio button is checked for the current question
		formData['question' + i] = (questionValue !== undefined) ? questionValue : 'skipped';

	}

	// Log the formData object to the console
//	console.table(formData);



	// Make an AJAX request to submit the form data
	$.ajax({
		type: 'POST',
		url: apiUrl+"submit-answers", // Change this to your actual controller endpoint
		data: JSON.stringify(formData), // Serialize formData object to JSON
		contentType: 'application/json', // Set content type to JSON
		success: function(response) {
			// Handle success response from the server if needed
			//console.log("response :--> " + response);
			console.log('Form submitted successfully');
			appendThankYouPage(response);
		},
		error: function(xhr, status, error) {
			// Handle errors if any
			console.error('Error:', error);
		}
	});


}


function appendThankYouPage(response) {

	var json = '';

	json = json + '<div class="content flex items-center justify-center h-[85vh]">';
	json = json + '<div class="wrapper-1 max-w-screen-md mx-auto">';
	json = json + '<div class="wrapper-2 bg-white p-8 rounded-lg shadow-lg text-center">';
	json = json + '<h1 class="text-3xl font-bold mb-2 text-green-600 ks-reg pb-5">Thank You!</h1>';
	json = json + '<p class="text-gray-700 mb-2">Thanks for Taking the Test .</p>';
	json = json + '<p class="text-gray-700 mb-4">You will receive a email soon.</p>';
	json = json + '<div class="footer-like mt-4 bg-gray-200 py-2 text-center">';
	json = json + '<h2 style="font-family:stencil;" class="text-3xl font-semibold text-red-600">ALTEK</h2>';
	json = json + '<p class="text-gray-600">Marathahalli, Bangalore</p>';
	json = json + '</div>';
	json = json + '</div>';
	json = json + '</div>';
	json = json + '</div>';



	$('#appendTestPaper').html(json);

}