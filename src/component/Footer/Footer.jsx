import React from "react";
import "./Footer.css";
import { BsFlag } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImSkype } from "react-icons/im";

// import { ImSkype } from "react-icons/ai";
// import { ImSkype } from "react-icons/ai";
// import { ImSkype } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      {/* top footer section  start*/}
      <section className="TopFooter_Container">
        <main className="TopFooter_Container_row row">
          <div className="TopFooter_colOne col-4">
            {/* col one sub div one */}
            <div>
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>United State</span>
              </h5>
              <h6 className="TopFooter_cityName">
                <b>Atlanta</b>
              </h6>
              <p className="TopFooter_City_paragraph">
                925 Battery Ave SE, Atlanta, GA, United States 30339
              </p>
              <h6 className="TopFooter_cityName">
                <b>Cincinnati</b>
              </h6>
              <p className="TopFooter_City_paragraph">
                727 Forum Apartments, Apt #705W, Martin Luther King Dr W,
                Cincinnati, OH 45220
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+2222200198298192</span>
              </p>
            </div>
            {/* col one subdiv two  */}
            <div className="colOne_subdiv">
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>CANADA</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                925 Battery Ave SE, Atlanta, GA, United States 30339
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+2222200198298192</span>
              </p>
            </div>
          </div>
          <div className="TopFooter_colTwo col-4">
            {/* col two subdiv one */}
            <div>
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>UNITED KINGDOM</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                15 King St, London EC2V 8EA, United Kingdom
              </p>
            </div>
            {/* col two subdiv two*/}

            <div className="colTwo_subdiv">
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>UAE</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                Sharjah Media City Building, AI Dhaid Street, Sharjah, UAE-51500
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+971-564176705</span>
              </p>
            </div>
            {/* col two subdiv three*/}

            <div className="colThree_subdiv">
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>Australia</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                Unit 2, 32 Homebush Road, Strathfield, New South Wales Australia
                -2135
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+971-564176705</span>
              </p>
            </div>
          </div>
          <div className="TopFooter_colThree col-4">
            {/* col three sud div one */}
            <div className="colThree_subdiv">
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>Saudia Arabia</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                Flamingo 5, Atlit, Israel
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+971-564176705</span>
              </p>
            </div>

            {/* col three sud div two */}
            <div className="colTwo_subdiv">
              <h5 className="TopFooter_countryName">
                <BsFlag className="TopFooter_flaglogo" />
                <span style={{ paddingLeft: "12px" }}>Australia</span>
              </h5>
              <p className="TopFooter_Country_paragraph">
                Unit 2, 32 Homebush Road, Strathfield, New South Wales Australia
                -2135
              </p>
              <p className="TopFooter_CountryNumber">
                <MdCall className="TopFooter_calllogo" />
                <span style={{ paddingLeft: "12px" }}>+971-564176705</span>
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* top footer section  end*/}

      {/* Bottom footer section  start*/}
      <section className="BottomFooter_Container">
        {/* BottomFooter_rowOne  start*/}

        <main className="BottomFooter_rowOne row">
          <div className="col-3">
            <h5 className="BottomFooter_rowOne_heading">Services</h5>
            <ul className="BottomFooter_rowOne_ul">
              <li>SaaS Development</li>
              <li>CRM Solution</li>
              <li>Outsource App Development</li>
              <li>Cloud Computing</li>
              <li>Blockchain Development</li>
              <li>PHP Development</li>
              <li>MEAN Stack Development</li>
              <li>Nodejs Development</li>
              <li>DevOps Development</li>
              <li>Angular JS Development</li>
              <li>Unity Game Development</li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="BottomFooter_rowOne_heading">ON DEMAND SOLUTIONS</h5>
            <ul className="BottomFooter_rowOne_ul">
              <li>Taxi App Solution</li>
              <li>Food Delivering App Solutions</li>
              <li>ELearning App Solutions</li>
              <li>Lifestyle App Development</li>
              <li>Healthcare App Development</li>
              <li>On Demand eWallet App Solutions</li>
              <li>Fantasy Sports App Development</li>
              <li>Grocery Delivery App Development</li>
              <li>Live Streaming App Development</li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="BottomFooter_rowOne_heading">DIGITAL TRANSFORMATION</h5>
            <ul className="BottomFooter_rowOne_ul">
              <li>IoT App Development</li>
              <li>AR App Development</li>
              <li>VR App Development</li>
              <li>Big Data</li>
              <li>ibeacon App Development</li>
              <li>Progressive Web App</li>
              <li>Talend Data Integration</li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="BottomFooter_rowOne_heading">USEFUL LINKS</h5>
            <ul className="BottomFooter_rowOne_ul">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Testimonials</li>
              <li>Referral Partner Program</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Our Training Program</li>
            </ul>
          </div>
        </main>

        {/* BottomFooter_rowOne  end */}

        {/* BottomFooter_rowTwo start  */}
        <main className="BottomFooter_rowTwo  row">
          <div className="col-6">
            <div className="BottomFooter_rowTwo_colOne">
              <p id="BottomFooter_rowTwo_iconPara_id">
                <FiFacebook className="BottomFooter_rowTwo_icon" />
              </p>
              <p className="BottomFooter_rowTwo_iconPara">
                <FiTwitter className="BottomFooter_rowTwo_icon" />
              </p>
              <p className="BottomFooter_rowTwo_iconPara">
                <AiFillLinkedin className="BottomFooter_rowTwo_icon" />
              </p>
              <p className="BottomFooter_rowTwo_iconPara">
                <BsYoutube className="BottomFooter_rowTwo_icon" />
              </p>
              <p className="BottomFooter_rowTwo_iconPara">
                <BsInstagram className="BottomFooter_rowTwo_icon" />
              </p>
              <p className="BottomFooter_rowTwo_iconPara"> 
                <ImSkype className="BottomFooter_rowTwo_icon" />
              </p>
            </div>
            <div id="BottomFooter_rowTwo_paraLight" className="BottomFooter_rowTwo_fontSize">
              © 2008-2022 Copyright theninehertz.com, All rights reserved.
            </div>
          </div>
          <div className="BottomFooter_rowTwo_fontSize col-4">
            <p>
              <MdCall className="BottomFooter_calllogo" />
              <span style={{ paddingLeft: "12px" }}>+2222200198298192</span>
            </p>
            <p>
              <span>gmail logo</span>sales@theninehertz.com
            </p>
          </div>
          <div className="col-2">
            <button className="BottomFooter_button">
              CONTACT US
              <i
                class="bi bi-arrow-up-right"
                style={{ paddingLeft: "5px" }}
              ></i>
            </button>
          </div>
        </main>
        {/* BottomFooter_rowOTwo end */}
      </section>

      {/* Bottom footer section  end*/}
    </div>
  );
};

export default Footer;
