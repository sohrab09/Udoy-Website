import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Pages/Main/Main";
import HomeInternet from "./components/Pages/HomeInternet/HomeInternet";
import SMEInternet from "./components/Pages/SMEInternet/SMEInternet";
import BillPay from "./components/Pages/BillPay/BillPay";
import Support from "./components/Pages/Support/Support";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import SelfCareLogin from "./components/Pages/SelfCareLogin/SelfCareLogin";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/home-internet" element={<HomeInternet />} />
            <Route path="/sme-internet" element={<SMEInternet />} />
            <Route path="/bill-pay" element={<BillPay />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/self-care-login" element={<SelfCareLogin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;