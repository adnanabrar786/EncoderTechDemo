import React from "react";
import samsung from "./images/samsung.jpg";

const CardServices = () => {
  return (
    <div>
      <div className="CardServices_map_conatiner container">
        {/* card one */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">
            Custom Mobile App Development Services
          </h5>
          <p className="CardServices_para">
            We help you create a customized mobile app experience that fuels
            your ideas. Trust our experts with an out-of-the-box approach to
            complete your requests
          </p>
        </div>

        {/* card two */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">App Development Consulting</h5>
          <p className="CardServices_para">
            Get access to premium mobile app development consulting services to
            implement the right tech and architecture for your mobile app
          </p>
        </div>

        {/* card three */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">
            Hybrid Mobile App Development
          </h5>
          <p className="CardServices_para">
            Trust us to build customized hybrid apps that work perfectly on
            Android and iOS platforms. Speed up the process, save time and
            costs.
          </p>
        </div>

        {/* card four */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">
            Native Mobile App Development
          </h5>
          <p className="CardServices_para">
            Design and implement the most stellar native apps that are built to
            match your custom needs. Play with advanced features and scale as
            per requirements
          </p>
        </div>

        {/* card five */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">Wearable Apps Development </h5>
          <p className="CardServices_para">
            Develop apps for the new tech – wearables. Get custom apps for
            Android, iOS, and similar platforms to have a reach in all segments
          </p>
        </div>

        {/* card six */}
        <div className="CardServices_conatiner">
          <img src={samsung} alt="samsung" className="CardServices_icon" />
          <h5 className="CardServices_heading">Digital Transformation </h5>
          <p className="CardServices_para">
            Get onboard with technologies like AI, AR, and iOT to make your
            business functional with the changing trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
