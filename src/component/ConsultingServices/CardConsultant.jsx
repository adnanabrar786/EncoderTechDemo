import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GrMonitor } from "react-icons/gr";
import { BsJournalCode } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { GiDigitalTrace } from "react-icons/gi";
import { HiOutlineCube } from "react-icons/hi";
// import { FaRegShareSquare } from "react-icons/fa";





const CardConsultant = () => {
  return (
    <div>
      {/* one */}
      <div className="ConsultingServices_card_Map_container">
        {/* Mobile App Development */}
        <div>
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
                <FaMobileAlt className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Mobile App Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                As the best mobile app development company, we are experts in
                developing native and cross-platform mobile apps suitable for
                all business verticals.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>

        {/* game development */}
        <div>
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
                <IoGameController className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Game Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                As the best mobile app development company, we are experts in
                developing native and cross-platform mobile apps suitable for
                all business verticals.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>
        {/* web development */}

        <div>
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
                <GrMonitor className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Web Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                Our certified web developers work across the latest technologies
                to develop scalable websites and web applications for your
                business growth..
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>

        {/* low code development */}
        <div>
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
                <BsCodeSquare className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Low Code Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                We work on the best low-code platforms that offer integrated
                development to reduce the complexity and time needed to deliver
                applications..
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* two */}
      <div className="ConsultingServices_card_Map_container">
        {/*  Salesforce Development */}
        <div>
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
                <BsJournalCode className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Salesforce Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                Get customizable Salesforce solutions to develop and deploy
                enterprise-level business applications and scale your customer
                relationships.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>

        {/* E-Commerce Solutions */}
        <div>
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
                <BsCart className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                E-Commerce Solutions
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                Our tailor-made enterprise e-commerce solutions comprise a range
                of products and IT services that gives a dynamic boost to your
                business.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>
        {/* Digital Transformation*/}

        <div>
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
                <GiDigitalTrace className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
                Digital Transformation
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                As the best mobile app development company, we are experts in
                developing native and cross-platform mobile apps suitable for
                all business verticals.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain Development */}
        <div>
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
                <HiOutlineCube className="CardCousultingservices_cradIcon" />
              </p>
              <h5 className="CardCousultingservices_card_heading">
              Blockchain Development
              </h5>
              <p className="CardCousultingservices_card_paragraph">
                Revolutionize your business with an experienced blockchain
                service provider to develop and manage decentralized solutions
                in the global financial sector.
              </p>
              <p>
                <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardConsultant;
