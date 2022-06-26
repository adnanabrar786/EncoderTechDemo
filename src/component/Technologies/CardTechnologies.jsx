import React from "react";
import Card from "react-bootstrap/Card";
import { FaMobileAlt } from "react-icons/fa";

const CardTechnologies = () => {
  return (
    <div>
      <Card
        style={{
          width: "45.5rem",
          height: "27rem",
          borderRadius: "16px",
        }}
      >
        <Card.Body>
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTechnologies;
