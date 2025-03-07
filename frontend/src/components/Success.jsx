function Success() {
  return (
    <>
      <div className="content flex items-center justify-center h-[85vh]">
        <div className="wrapper-1 max-w-screen-md mx-auto">
          <div className="wrapper-2 bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold mb-2 text-green-600 ks-reg pb-5">
              Success!
            </h1>
            <h2
            style={{fontFamily:'stencil'}}
              className="text-3xl font-semibold mb-4 text-red-600"
            >
              ALTEK
            </h2>
            <p className="text-gray-700 mb-2">You will receive a email soon.</p>
            <p className="text-gray-700 mb-4">
              Check for the credentials and Login for attempting the test
            </p>
          </div>
          {/* <div className="footer-like mt-4 bg-blue-200 py-2 text-center">
            <p className="text-gray-600">
              Email not received?{" "}
              <a
                href="http://ec2-13-53-175-15.eu-north-1.compute.amazonaws.com:8080/sendmail"
                className="text-blue-600 hover:underline"
              >
                Click here to send again
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Success;
