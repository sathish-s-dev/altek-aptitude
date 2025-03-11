import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <>
      <div className="content flex items-center justify-center h-[85vh]">
        <div className="wrapper-1 max-w-screen-md mx-auto">
          <div className="wrapper-2 bg-white  p-8 rounded-lg shadow-2xl  h-2/3 text-center">
            <h1 className="text-3xl font-bold mb-2 text-green-600 ks-reg pb-5">
              Thank You!
            </h1>
            <p className="text-gray-700 mb-2">Thanks for Taking the Test .</p>
            <p className="text-gray-700 mb-4">You will receive a email soon.</p>
            <div className="footer-like mt-4 bg-gray-100 py-2 text-center">
              <h2
                style={{ fontFamily: "stencil" }}
                className="text-3xl font-semibold text-red-600"
              >
                ALTEK
              </h2>
              <p className="text-gray-600">Marathahalli, Bangalore</p>
            </div>
            <div className="footer-like mt-2 bg-gray-100 py-2 px-2 text-center">
              <h2 className="text-md">
                For 2025 fresher New Batches Updates and
                <br /> Discounts Check{" "}
                <Link
                  to={"https://www.altekinstitution.com"}
                  className="text-red-600 hover:underline"
                  target="_blank"
                >
                  www.altekinstitution.com
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
