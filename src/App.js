// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/Navbar/Navbar";
import Talkexpert from "./component/Talkexpert/Talkexpert";
import ConsultingServices from "./component/ConsultingServices/ConsultingServices";
import Technologis from "./component/Technologies/Technologis";
import Footer from "./component/Footer/Footer";
import LatestWork from "./component/LatestWork/LatestWork";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Talkexpert />
      <ConsultingServices />
      <Technologis/>
      <LatestWork/>
    </div>
  );
}

export default App;
