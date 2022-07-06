import React from "react";
import "./CardTecgnology.css"
import { FaMobileAlt } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiXamarin } from "react-icons/si";
import flutter from "./icon/flutter.png";

import { BsCodeSquare } from "react-icons/bs";
import { SiAngular } from "react-icons/si";
import HTML5 from "./icon/HTML5.png";
import devops from "./icon/devops.png";
import mean from "./icon/mean.png";

import { BsJournalCode } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoLaravel } from "react-icons/io5";
import python from "./icon/python.jpg";
import php from "./icon/php.png";
import dotnet from "./icon/dotnet.jpg";
import { TbDatabase } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import mongodb from "./icon/mongodb.png";
import redis from "./icon/redis.png";
import elasticresearch from "./icon/elasticresearch.png";
import postgre from "./icon/postgre.png";

const CardTechnologies = () => {
  return (
    <div>
      <div className="Technologis_card_Map_container">
        {/* Mobile App Development */}
        <div className="Technologis_card_Map_SUbcontainer">
          <div
            className="Technologis_card_container card"
            style={{
              width: "42.5rem",
              height: "21rem",
              borderRadius: "16px",
              backgroundColor: "#1576d8",
              color: "#ffffff",
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
                    Our mobile app developers are well-versed with the latest
                    mobile app development technologies and platforms that give
                    you a cutting-edge in the market.
                  </p>
                </div>
              </div>
              <div className="icon_Container">
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <BsApple
                      style={{ color: "#808080" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>IOS</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <DiAndroid
                      style={{ color: "#92dd22" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Android</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={flutter}
                      alt="flutter"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Flutter</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <SiXamarin
                      style={{ color: "#1576d8" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Xamarin</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <FaReact
                      style={{ color: "#7be0f4" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>React Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Front End and Full stack */}
        <div className="Technologis_card_Map_SUbcontainer">
          <div
            className="Technologis_card_container card"
            style={{
              width: "42.5rem",
              height: "21rem",
              borderRadius: "16px",
            }}
          >
            <div className="card-body">
              <div className="Card_Technologies_ParagraphWork">
                <div>
                  <BsCodeSquare className="Card_Technologies_cradlogo" />
                </div>
                <div className="Card_Technologies_ParagraphWork_paraDiv">
                  <h3 className="Card_Technologies_CaradHeading">
                    Front End and Full stack
                  </h3>
                  <p className="Card_Technologies_CradPara">
                    Our full-stack developers are jack of all trades and use the
                    latest frameworks for interactive front-end and back-end
                    development.
                  </p>
                </div>
              </div>
              <div className="icon_Container">
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <SiAngular
                      style={{ color: "#db2b29" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Angular</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <FaReact
                      style={{ color: "#7be0f4" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>React</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={HTML5}
                      alt="HTML5"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>HTML5</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={mean}
                      alt="devops"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>MEAN</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={devops}
                      alt="devops"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Devops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Backend Development */}
        <div className="Technologis_card_Map_SUbcontainer">
          <div
            className="Technologis_card_container card"
            style={{
              width: "42.5rem",
              height: "21rem",
              borderRadius: "16px",
            }}
          >
            <div className="card-body">
              <div className="Card_Technologies_ParagraphWork">
                <div>
                  <BsJournalCode className="Card_Technologies_cradlogo" />
                </div>
                <div className="Card_Technologies_ParagraphWork_paraDiv">
                  <h3 className="Card_Technologies_CaradHeading">
                    Backend Development
                  </h3>
                  <p className="Card_Technologies_CradPara">
                    The certified backend developers are competent to build and
                    power the technologies for user-facing components of your
                    website.
                  </p>
                </div>
              </div>
              <div className="icon_Container">
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <FaNodeJs
                      style={{ color: "#21c026" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Node js</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <IoLogoLaravel
                      style={{ color: "#dd3e37" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Laravel</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={python}
                      alt="python"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Python</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={php}
                      alt="php"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>PHP</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={dotnet}
                      alt="dotnet"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>.NET</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Database Development */}
        <div className="Technologis_card_Map_SUbcontainer">
          <div
            className="Technologis_card_container card"
            style={{
              width: "42.5rem",
              height: "21rem",
              borderRadius: "16px",
            }}
          >
            <div className="card-body">
              <div className="Card_Technologies_ParagraphWork">
                <div>
                  <TbDatabase className="Card_Technologies_cradlogo" />
                </div>
                <div className="Card_Technologies_ParagraphWork_paraDiv">
                  <h3 className="Card_Technologies_CaradHeading">
                    Database Development
                  </h3>
                  <p className="Card_Technologies_CradPara">
                    Our database developers have firsthand experience in the
                    latest technologies and frameworks and deploy that to
                    deliver robust database management systems.
                  </p>
                </div>
              </div>
              <div className="icon_Container">
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={mongodb}
                      alt="mongodb"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>MongoDB</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={redis}
                      alt="redis"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>Redis</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={postgre}
                      alt="postgre"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>PostgreSQL</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <img
                      src={elasticresearch}
                      alt="elasticresearch"
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>ElasticSearch</p>
                </div>
                <div className="icon_Sub_Container">
                  <p className="icon_Sub_Container_para">
                    <GrMysql
                      style={{ color: "#247de0" }}
                      className="icon_Sub_Container_icon"
                    />
                  </p>
                  <p>MTSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTechnologies;
