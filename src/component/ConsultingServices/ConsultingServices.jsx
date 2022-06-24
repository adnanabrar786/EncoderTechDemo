import React from "react";
import CardCousultingservices from "./CardCousultingservices";
import "./ConsultingServices.css";
// import dedicatedDevelopers from "./images/dedicatedDevelopers.webp";

const ConsultingServices = () => {
  return (
    <div>
      {/* ConsultingServices top paragraph start */}
      <div className="ConsultingServices_paragraph_container row">
        <div className="col-5">
          <p className="ConsultingServices_leftparagraph_heading">SERVICES</p>
          <p className="ConsultingServices_leftparagraph_para">
            Our Robust Suite Of <b>IT Consulting</b> Services
          </p>
        </div>
        <div className="ConsultingServices_Rightparagraph col-7">
          <p className="ConsultingServices_Rightparagraph_paragraph">
            Our offshore IT consulting services along with the AI-powered core
            helps top companies stay competitive, win new markets and increase
            shareholder value. Choose from a wide range of custom software
            development services and get extensive expertise at your disposal.
          </p>
        </div>
      </div>
      {/* ConsultingServices top paragraph end */}

      {/* ConsultingServices card start */}

      <div className="ConsultingServices_card_Map_container">
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
      </div>

      {/* two */}

      <div className="ConsultingServices_card_Map_container">
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
        <div>
          <CardCousultingservices />
        </div>
      </div>

      {/* ConsultingServices card end */}

      {/* Most Trusted Software Development Company Since 2008  SECTION start*/}

      {/* most trusted  software  since 2008 left work */}

      <div className="mosttrusted_container container-fluid">
        <div className="mosttrusted_Sub_container row">
          <div className="col-5">
            <p className="mosttrusted_leftDiv_who">WHO WE ARE</p>
            <p className="mosttrusted_leftDiv_hedding">
              Most <b>Trusted</b> Software Development Company <b>Since 2008</b>
            </p>
            <div className="mosttrusted_leftDiv_paragragh">
              <p>
                WHO WE ARE Most Trusted Software Development Company Since 2008
                Being one of the best IT consulting companies in the US market,
                we have delivered IT solutions at a global level by leveraging
                the full potential of the latest disruptive technologies.
              </p>
              <p>
                We are purists in cognitive computing, hyper-automation, and
                analytics to help enterprises reimagine their businesses for the
                digital age. Our technical prowess accelerates your enterprise
                cloud journey and our AI-powered core makes us your change
                agent. We evolve with the power of our innovation ecosystem to
                deliver exceptional customer service.
              </p>

              <p>
                Our agile hiring models and relentless focus on customer delight
                have garnered the trust as the best software development company
                to outsource offshore IT Consulting services.
              </p>
            </div>
            <button className="mosttrusted_leftDiv_button">
              GET A FREE CONSULTATION
              <i
                class="bi bi-arrow-up-right"
                style={{ paddingLeft: "8px" }}
              ></i>
            </button>
          </div>

          {/* most trusted  software  since 2008 right work */}
          <div className="mosttrusted_rightDiv col-7">
            <div className="mosttrusted_rightDiv_box">
              <div className="mosttrusted_rightDiv_box_rowOne">
                <p className="mosttrusted_rightDiv_box_rowOne_paraOne">
                  <abbr>1800 +</abbr> <span>Projects Launched</span>
                </p>
                <p className="mosttrusted_rightDiv_box_rowOne_paraTwo">
                  <abbr className="mosttrusted_rightDiv_box_rowOne_paraTwo_abbr">13 +</abbr> <span>Years of Experience</span>
                </p>
              </div>
              <div className="mosttrusted_rightDiv_box_rowTwo">
                <img
                  src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/img/home/jpg/dedicated-developers.jpg"
                  alt="dedicatedDevelopers"
                  className="img_dedicatedDevelopers"
                />
              </div>

              <div className="mosttrusted_rightDiv_box_rowThree">
                {/* <p>
                  <abbr>1800 +</abbr> <span>Projects Launched</span>
                </p>
                <p>
                  <abbr>13 +</abbr> <span>Years of Experience</span>
                </p> */}
              </div>
            </div>
            <div>
              <p>
                if you have questions or need help, feel free to contact with
                our team, or call <b>+1-315-381-4100</b>
              </p>
              <button className="Talkexpert_button">
                TALK TO OUR EXPERTS
                <i
                  class="bi bi-arrow-up-right"
                  style={{ paddingLeft: "5px" }}
                ></i>
              </button>
            </div>
          </div>
          {/* Most Trusted Software Development Company Since 2008  SECTION end*/}
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
