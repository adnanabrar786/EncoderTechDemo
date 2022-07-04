import React from "react";
import CardConsultant from "./CardConsultant";
import "./Talkexpert.css";
import roundtables from "./images/roundtables.gif";

// talk expert
// ConsultingServices
//  MostTrusted  Section

const ConsultingServices = () => {
  return (
    <div>
      {/* TALK TO OUR EXPERTS section start */}
      <section className="container-fluid ">
        <div className="Talkexpert_container row">
          <div className="col-5">
            <p className="Talkexpert_heading">
              <b>Digital</b> Transformation With Modernized Software And
              <b> IT Consulting</b> Services
            </p>
            <p className="Talkexpert_paragraph">
              The Encoder is a decade old custom software development company on
              a mission to empower businesses with cutting edge technology to
              thrive in the digital age and to create lasting value by solving
              the problems digitally. With our priority to innovation, we are
              adept at developing high-quality, AI-enabled, smart, and robust
              software solutions for rapid business transformation. Start your
              journey with us to digitize your organization using state-of-art
              technology to build a better, bold, and futuristic business
              empire.
            </p>
            <button className="Talkexpert_button">TALK TO OUR EXPERTS</button>
          </div>
          <div className="Talkexpert_right_div col-6">
            <img
              src={roundtables}
              alt="roundtables"
              className="Talkexpert_right_image"
            />
          </div>
        </div>
      </section>

      {/* TALK TO OUR EXPERTS section end */}
      {/* ConsultingServices section start */}
      <section>
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

        <div>
          <CardConsultant />
        </div>
      </section>

      {/* ConsultingServices section start */}

      {/* most trusted  ssection start */}

      <section className="mosttrusted_container container-fluid">
        <div className="mosttrusted_Sub_container row">
          <div className="col-5">
            <p className="mosttrusted_leftDiv_who">WHO WE ARE</p>
            <p className="mosttrusted_leftDiv_hedding">
              Most <b>Trusted</b> Software Development Company <b>Since 2008</b>
            </p>
            <div className="mosttrusted_leftDiv_paragraghDiv">
              <p className="mosttrusted_leftDiv_paragragh_p">
                Being one of the best IT consulting companies in the US market,
                we have delivered IT solutions at a global level by leveraging
                the full potential of the latest disruptive technologies.
              </p>
              <p className="mosttrusted_leftDiv_paragragh_p">
                We are purists in cognitive computing, hyper-automation, and
                analytics to help enterprises reimagine their businesses for the
                digital age. Our technical prowess accelerates your enterprise
                cloud journey and our AI-powered core makes us your change
                agent. We evolve with the power of our innovation ecosystem to
                deliver exceptional customer service.
              </p>

              <p className="mosttrusted_leftDiv_paragragh_p">
                Our agile hiring models and relentless focus on customer delight
                have garnered the trust as the best software development company
                to outsource offshore IT Consulting services.
              </p>
            </div>
            <button className="mosttrusted_leftDiv_button">
              GET A FREE CONSULTATION
            </button>
          </div>

          {/* most trusted  software  since 2008 right work */}
          <div className="col-7">
            <div className="mostTrusted_Rightbox">
              {/* row_one */}
              <div className="mostTrusted_Rightbox_RowOneDiv">
                <div className="mostTrusted_Rightbox_RowOneSubDivOne">
                  <h1>
                    <b>1800 +</b>
                  </h1>
                  <p className="mostTrusted_Rightbox_RowOneSubDivOne_p">
                    Projects Launched
                  </p>
                </div>
                <div className="mostTrusted_Rightbox_RowOneSubDivTwo">
                  <h1>
                    <b>13 +</b>
                  </h1>
                  <p className="mostTrusted_Rightbox_RowOneSubDivOne_p">
                    Years of Experience
                  </p>
                </div>
              </div>
              {/* row_two */}
              <div className="mostTrusted_Rightbox_RowTwoDiv">
                <img
                  src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/img/home/jpg/dedicated-developers.jpg"
                  alt="dedicatedDevelopers"
                  className="img_dedicatedDevelopers"
                />
              </div>

              {/* row_three */}
              <div className="mostTrusted_Rightbox_RowOneDiv">
                <div className="mostTrusted_Rightbox_RowOneSubDivOne">
                  <h1>
                    <b>1800 +</b>
                  </h1>
                  <p className="mostTrusted_Rightbox_RowOneSubDivOne_p">
                    Projects Launched
                  </p>
                </div>
                <div className="mostTrusted_Rightbox_RowOneSubDivTwo">
                  <h1>
                    <b>13 +</b>
                  </h1>
                  <p className="mostTrusted_Rightbox_RowOneSubDivOne_p">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="mostTrusted_Rightbox_BottomWork">
              <div>
                <p className="mostTrusted_Rightbox_BottomWork_p">
                  if you have questions or need help, feel free to contact with
                  our team, or call
                  <span className="mostTrusted_Rightbox_BottomWork_span">
                    <b>+92139875433</b>
                  </span>
                </p>
              </div>
              <div>
                <button className="mostTrusted_Rightbutton">CONTACT US</button>
              </div>
            </div>
          </div>

          {/* Most Trusted Software Development Company Since 2008  SECTION end*/}
        </div>
      </section>

      {/* most trusted  ssection end */}
    </div>
  );
};

export default ConsultingServices;
