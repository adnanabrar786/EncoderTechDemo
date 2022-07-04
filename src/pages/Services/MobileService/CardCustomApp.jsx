import React from "react";
import flutter from "./images/flutter.png";
import { SiFlutter } from "react-icons/si";

const CardCustomApp = () => {
  return (
    <div className="CardCustomApp_map_container">
      {/* card one  start */}
      <div className="CardCustomApp_container">
        <h2>Hybrid App Development</h2>
        <p>
          Hybrid applications are those which utilize a similar code for all to
          be viable with differed OS like iOS, Android, and so on. Hybrid apps
          are the right pick for you if –
        </p>
        <ul>
          <li>Cost-effective app development with simple codes</li>
          <li>Quick to market app development</li>
          <li>Simple integration with contemporary apps</li>
        </ul>
        <div>
          <div className="CardCustomApp_logoDiv_mapContainer">
            {/* logo one */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>Flutter</p>
            </div>
            {/* logo two */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>Flutter</p>
            </div>
            {/* logo three */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>Flutter</p>
            </div>
            {/* logo four */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>Flutter</p>
            </div>
          </div>
        </div>
      </div>

      {/*card  one  end */}

      {/*card two  start */}
      <div className="CardCustomApp_container">
        <h2>Native App Development</h2>
        <p>
          Native apps are those which run on dedicated cell phones or OS and can
          utilize gadget-specific equipment and programming. Native apps are the
          right pick for you if –
        </p>
        <ul>
          <li>You want a native user experience on a particular device</li>
          <li>More secure environment for the app</li>
          <li>High End performance</li>
          <li>Access to device hardware</li>
        </ul>
        <div>
          <div className="CardCustomApp_logoDiv_mapContainer">
            {/* logo one */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>ios</p>
            </div>
            {/* logo two */}
            <div className="CardCustomApp_logoDiv">
              <p>
                <SiFlutter className="CardCustomApp_logo" />
              </p>
              <p>Android</p>
            </div>
          </div>
        </div>
      </div>

      {/*card two  end */}
    </div>
  );
};

export default CardCustomApp;
