import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
