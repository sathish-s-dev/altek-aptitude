import { useState } from "react";
import axios from "axios";
import {apiUrl} from "./Globals";
import Success from "./Success";
function SendMail() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSend = () => {
    // Reset error message
    setErrorMessage("");

    if (email.trim() === "") {
      setErrorMessage("Email field cannot be empty");
      return;
    }
    // Regular expression to validate email format
    // else {
    //   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //   // Check if the entered email matches the email pattern
    //   if (!emailRegex.test(email)) {
    //     setErrorMessage("Please enter a valid email address");
    //     return;
    //   }
    // }

    // Show loader
    setIsLoading(true);
    console.log(email);

    try {
        const userData = { mail: email }; // Creating JSON object with only the email field
        const response = axios.post(apiUrl+"sendMail", userData);
        console.log('Response:', response);
        console.log("Mail sent successfully!");
        setIsSuccess(true);
            // Hide loader
            setIsLoading(false);
            // Clear email field
            setEmail("");
              // Handle response as needed
      } catch (error) {
        console.error('Error:', error);
        // Handle error as needed
      }



   
    // Simulate sending mail (you would replace this with your actual send mail logic)
    // Simulating a delay of 2 seconds
  };

  return (
    <>
      {isLoading && (
        <div
          id="loaderPopup"
          className="loader-popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25"
        >
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      )}

      <div id="appendSuccessPage">
      {isSuccess ? (
        <>
        <Success />
        </>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="border-b-2 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black-900">
              Send Mails
            </h2>
          </div>

          <div className="mb-20 mt-10 sm:mx-auto sm:w-full sm:max-w-sm overflow-auto">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="indent-1.5 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span id="error-message" className="text-red-500">
                    {errorMessage}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSend}
                  className="flex justify-center w-[150px] mx-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default SendMail;
