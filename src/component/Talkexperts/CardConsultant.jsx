import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { BsJournalCode } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { GiDigitalTrace } from "react-icons/gi";
import { HiOutlineCube } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { FaRegShareSquare } from "react-icons/fa";

const CardConsultant = () => {
  return (
    <div>
      {/* one */}
      <div className="ConsultingServices_card_Map_container">
        {/* Mobile App Development */}
        <Link to="/mobileservice">
        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
            backgroundColor: "#1576d8",
            color: "#ffffff",
          }}
        >
          <div className="card-body">
            <p>
              <FaMobileAlt className="CardCousultingservices_cradIcon" />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Mobile App Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              As the best mobile app development company, we are experts in
              developing native and cross-platform mobile apps suitable for all
              business verticals.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>
        </Link>

        {/* game development */}
        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <IoGameController
                style={{ color: "#87CEEB" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Game Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              As the best mobile app development company, we are experts in
              developing native and cross-platform mobile apps suitable for all
              business verticals.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>
        {/* web development */}

        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <FiMonitor
                style={{ color: "#FF69B4" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Web Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              Our certified web developers work across the latest technologies
              to develop scalable websites and web applications for your
              business growth..
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>

        {/* low code development */}
        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <BsCodeSquare
                style={{ color: "#00D100" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Low Code Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              We work on the best low-code platforms that offer integrated
              development to reduce the complexity and time needed to deliver
              applications..
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>

        {/*  Salesforce Development */}

        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <BsJournalCode
                style={{ color: "#f67632" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Salesforce Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              Get customizable Salesforce solutions to develop and deploy
              enterprise-level business applications and scale your customer
              relationships.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>

        {/* E-Commerce Solutions */}

        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <BsCart
                style={{ color: "#e67575" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              E-Commerce Solutions
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              Our tailor-made enterprise e-commerce solutions comprise a range
              of products and IT services that gives a dynamic boost to your
              business.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>

        {/* Digital Transformation*/}

        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <GiDigitalTrace
                style={{ color: "#ffb703" }}
                c
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Digital Transformation
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              As the best mobile app development company, we are experts in
              developing native and cross-platform mobile apps suitable for all
              business verticals.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>

        {/* Blockchain Development */}

        <div
          className="CardCousultingservices_card_container card"
          style={{
            width: "19rem",
            height: "23.5rem",
            borderRadius: "16px",
            paddingTop: "10px",
          }}
        >
          <div className="card-body">
            <p>
              <HiOutlineCube
                style={{ color: "#87CEEB" }}
                className="CardCousultingservices_cradIcon"
              />
            </p>
            <h5 className="CardCousultingservices_card_heading">
              Blockchain Development
            </h5>
            <p className="CardCousultingservices_card_paragraph">
              Revolutionize your business with an experienced blockchain service
              provider to develop and manage decentralized solutions in the
              global financial sector.
            </p>
            <p className="CardCousultingservices_ShareIcon_para">
              <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardConsultant;
