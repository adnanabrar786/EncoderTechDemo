import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Talkexpert from "./component/Talkexpert/Talkexpert";
import ConsultingServices from "./component/ConsultingServices/ConsultingServices";
import Technologis from "./component/Technologies/Technologis";
import LatestWork from "./component/LatestWork/LatestWork";
import ClientSay from "./component/ClientSay.jsx/ClientSay";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Talkexpert />
      <ConsultingServices />
      <Technologis/>
      <LatestWork/>
      <ClientSay/>
    </div>
  );
}

export default App;
