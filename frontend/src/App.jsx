import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Home";
import SendMail from "./components/SendMail";
import Success from "./components/Success";
import ThankYou from "./components/ThankYou";
import MultistepForm from "./components/MultistepForm";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/sendmail" element={<SendMail />} />
          <Route path="/success" element={<Success />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<MultistepForm />} />
        </Routes> */}
      </Layout>
    </Router>
  );
}

export default App;
