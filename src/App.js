import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer.jsx";
import MobileService from "./pages/Services/MobileService/MobileService.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navbar />
      <br />
      <Home />
      <Footer /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileservice" element={<MobileService/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
