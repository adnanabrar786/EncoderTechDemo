import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { SiXamarin } from "react-icons/si";
import flutter from "./icon/flutter.png";
import { FaReact } from "react-icons/fa";

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

import "./Technologies.css"
const NewCardTechnology = () => {
  return (
    <div className="Technologis_card_Map_container">
      {/* Mobile App Development */}
      <div
        className="CardTechnology_container row"
        id="CardTechnology_container_id"
      >
        <div className="CardTechnology_upperdiv col-12">
          <div className="CardTechnology_upperdiv_logodiv">
            <FaMobileAlt className="CardTechnology_upperdiv_logo" />
          </div>
          <div>
            <p className="CardTechnology_upperdiv_heading">
              Mobile App Development
            </p>
            <p className="CardTechnology_upperdiv_paragraph col-12">
              Our mobile app developers are well-versed with the latest mobile
              app development technologies and platforms that give you a
              cutting-edge in the market.
            </p>
          </div>
        </div>
        <div className="CardTechnology_lowerdiv">
          {/* one */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <BsApple
                style={{ color: "#808080" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>ios</p>
          </div>
          {/* two */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <DiAndroid
                style={{ color: "#92dd22" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Android</p>
          </div>
          {/* three */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={flutter}
                alt="flutter"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Flutter</p>
          </div>
          {/* four */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <SiXamarin
                style={{ color: "#1576d8" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Xamarin</p>
          </div>
          {/* five */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <FaReact
                style={{ color: "#7be0f4" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>React Native</p>
          </div>
        </div>
      </div>

      {/* Front End and Full stack */}
      <div className="CardTechnology_container row">
        <div className="CardTechnology_upperdiv col-12">
          <div className="CardTechnology_upperdiv_logodiv">
            <BsCodeSquare
              style={{ color: "#808080" }}
              className="CardTechnology_upperdiv_logo"
            />
          </div>
          <div>
            <p className="CardTechnology_upperdiv_heading">
              Front End and Full stack
            </p>
            <p className="CardTechnology_upperdiv_paragraph col-12">
              Our full-stack developers are jack of all trades and use the
              latest frameworks for interactive front-end and back-end
              development.
            </p>
          </div>
        </div>
        <div className="CardTechnology_lowerdiv">
          {/* one */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <SiAngular
                style={{ color: "#db2b29" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Angular</p>
          </div>
          {/* two */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <FaReact
                style={{ color: "#7be0f4" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>React</p>
          </div>
          {/* three */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={HTML5}
                alt="flutter"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>HTML5</p>
          </div>
          {/* four */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={mean}
                alt="devops"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>MEAN</p>
          </div>
          {/* five */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={devops}
                alt="devops"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Devops</p>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="CardTechnology_container row">
        <div className="CardTechnology_upperdiv col-12">
          <div className="CardTechnology_upperdiv_logodiv">
            <BsJournalCode
              style={{ color: "#808080" }}
              className="CardTechnology_upperdiv_logo"
            />
          </div>
          <div>
            <p className="CardTechnology_upperdiv_heading">
              Backend Development
            </p>
            <p className="CardTechnology_upperdiv_paragraph col-12">
              The certified backend developers are competent to build and power
              the technologies for user-facing components of your website.
            </p>
          </div>
        </div>
        <div className="CardTechnology_lowerdiv">
          {/* one */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <FaNodeJs
                style={{ color: "#21c026" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Node.js</p>
          </div>
          {/* two */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <IoLogoLaravel
                style={{ color: "#dd3e37" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Laravel</p>
          </div>
          {/* three */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={python}
                alt="flutter"
                className="CardTechnology_lowerdiv_icon"
              />{" "}
            </p>
            <p>Python</p>
          </div>
          {/* four */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={php}
                alt="flutter"
                className="CardTechnology_lowerdiv_icon"
              />{" "}
            </p>
            <p>PHP</p>
          </div>
          {/* five */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={dotnet}
                alt="flutter"
                className="CardTechnology_lowerdiv_icon"
              />{" "}
            </p>
            <p>.Net</p>
          </div>
        </div>
      </div>

      {/* Database Development */}
      <div className="CardTechnology_container row">
        <div className="CardTechnology_upperdiv col-12">
          <div className="CardTechnology_upperdiv_logodiv">
            <TbDatabase
              style={{ color: "#808080" }}
              className="CardTechnology_upperdiv_logo"
            />
          </div>
          <div>
            <p className="CardTechnology_upperdiv_heading">
              Database Development
            </p>
            <p className="CardTechnology_upperdiv_paragraph col-12">
              Our database developers have firsthand experience in the latest
              technologies and frameworks and deploy that to deliver robust
              database management systems.
            </p>
          </div>
        </div>
        <div className="CardTechnology_lowerdiv">
          {/* one */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={mongodb}
                alt="elasticresearch"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>MongoDB</p>
          </div>
          {/* two */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={redis}
                alt="elasticresearch"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>Redis</p>
          </div>
          {/* three */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={postgre}
                alt="elasticresearch"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>PostgreSQL</p>
          </div>
          {/* four */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <img
                src={elasticresearch}
                alt="elasticresearch"
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>ElasticSearch</p>
          </div>
          {/* five */}
          <div className="CardTechnology_lowerdiv_icondiv">
            <p className="CardTechnology_lowerdiv_iconpara">
              <GrMysql
                style={{ color: "#247de0" }}
                className="CardTechnology_lowerdiv_icon"
              />
            </p>
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardTechnology;
