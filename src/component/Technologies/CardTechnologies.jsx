import React from "react";
import { FaMobileAlt } from "react-icons/fa";

const CardTechnologies = () => {
  return (
    <div>
      <div className="Technologis_card_container card"
        style={{
          width: "42.5rem",
          height: "21rem",
          borderRadius: "16px",
        }}
      >
        <div className="card-body">
          <div className="Card_Technologies_ParagraphWork">
            <div>
              <FaMobileAlt className="Card_Technologies_cradlogo" />
            </div>
            <div className="Card_Technologies_ParagraphWork_paraDiv">
              <h3 className="Card_Technologies_CaradHeading">
                Mobile App Development
              </h3>
              <p className="Card_Technologies_CradPara">
                Our mobile app developers are well-versed with the latest mobile
                app development technologies and platforms that give you a
                cutting-edge in the market.
              </p>
            </div>
          </div>
          <div className="icon_Container">
            <div className="icon_Sub_Container">
              <p>
                {/* <i class="bi bi-apple"></i> */}
                <FaMobileAlt className="icon_Sub_Container_icon" />
              </p>
              <p>IOS</p>
            </div>
            <div className="icon_Sub_Container">
              <p>
                <FaMobileAlt className="icon_Sub_Container_icon" />
              </p>
              <p>IOS</p>
            </div>
            <div className="icon_Sub_Container">
              <p>
                <FaMobileAlt className="icon_Sub_Container_icon" />
              </p>
              <p>IOS</p>
            </div>
            <div className="icon_Sub_Container">
              <p>
                <FaMobileAlt className="icon_Sub_Container_icon" />
              </p>
              <p>IOS</p>
            </div>
            <div className="icon_Sub_Container">
              <p>
                <FaMobileAlt className="icon_Sub_Container_icon" />
              </p>
              <p>IOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTechnologies;
