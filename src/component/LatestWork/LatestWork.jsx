import React from "react";
import CardIndustry from "./CardIndustry";
import "./LatestWork.css";
import "./LatestWorkResponsive.css";
import ReactPlayer from "react-player";
import CardTruestedBy from "./CardTruestedBy";

import iso from "./images/archievementimages/iso.jpg";
import clutch from "./images/archievementimages/clutch.png";
import nasscom from "./images/archievementimages/nasscom.jpg";
import upwork from "./images/archievementimages/upwork.png";
import goodfirm from "./images/archievementimages/goodfirm.png";
import itfirm from "./images/archievementimages/itfirm.png";
import appfutura from "./images/archievementimages/appfutura.png";
import google from "./images/archievementimages/google.png";
import softwareworld from "./images/archievementimages/softwareworld.png";
import crowdreview from "./images/archievementimages/crowdreview.jpg";
import gesia from "./images/archievementimages/gesia.jpg";
import freelancer from "./images/archievementimages/freelancer.jpg";

// discuss section
// Latest work
// industry we serve or services
// ARCHIEVEMENTS
// TrustedBy section
//  BLOG section

const LatestWork = () => {
  return (
    <div>
      <div className="LatestWork_container">
        {/* discuss your project section  start */}

        <section className="discuss_section">
          <div className="discuss_container">
            <div>
              <h3 className="discuss_heading">Let's Discuss Your Project</h3>
              <p className="discuss_paragraph">
                Get free consultation and let us know your project idea to trun
                it into an amazing digital product.
              </p>
            </div>
            <div>
              <button className="discuss_button">TALK TO OUR EXPERTS</button>
            </div>
          </div>
        </section>

        {/* discuss your project section  end */}

        {/* latest work section start */}
        <section>
          <main className="latestWork_main row">
            <div className="latestWork_upperdiv col-lg-6 col-md-12 col-sm-12">
              <p className="LatestWork_word">LATEST WORK</p>
              <p className="LatestWork_heading">
                Our <b> Notable </b> Offshore Software Development
                <b> Case Studies </b>
              </p>
              <p className="LatestWork_paragraph">
                We are one of the best IT Consulting companies that handle all
                aspects of software creation. Hire web developers who excel in a
                wide range of technology solutions and build websites that are
                efficient, flexible, and easy to maintain. Also, we help you to
                hire app developers who develop bespoke applications to help you
                redefine customer experiences.
              </p>
              <div className="LatestWork_buttondiv">
                <button className="LatestWork_button">
                  VIEW ALL CASE STUDIES
                </button>
              </div>

              <div className="LatestWork_box" id="LatestWork_box_boxOne">
                <div class="LatestWork_box_div">
                  <h3>Car Racing Game</h3>
                  <h5 className="LatestWork_box_div_h5">(web and app)</h5>
                  <p className="LatestWork_box_div_p">
                    Car racing games are dedicated to those who crave to feel
                    emotions like speed, thrill and adrenaline rush being a part
                    of the race. Besides being a jam-packed gaming industry with
                    a plethora of racing games (car and bikes), the original
                    graphic design of the games and real physics simulation is
                    what makes them unique from others and lets players get
                    engaged with the games for hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="LatestWork_box" id="LatestWork_box_boxTwo">
                <div class="LatestWork_box_div">
                  <h3>Pizza maker</h3>
                  <h5 className="LatestWork_box_div_h5">(web and app)</h5>
                  <p className="LatestWork_box_div_p">
                    Virtual trial room with augmented reality is the advancement
                    and technological innovation in the fashion industry. “Try
                    before you buy ” worked years ago for efficient customer
                    engagement in outfit stores. Now the concept is gradually
                    being replaced via virtual trial rooms which let customers
                    try clothes virtually that translates into eliminating long
                    queues and waiting periods in front of trail rooms.
                  </p>
                </div>
              </div>
              <div className="LatestWork_box" id="LatestWork_box_boxThree">
                <div class="LatestWork_box_div">
                  <h3>E-Learning Management System</h3>
                  <h5 className="LatestWork_box_div_h5">(web and app)</h5>
                  <p className="LatestWork_box_div_p">
                    Virtual trial room with augmented reality is the advancement
                    and technological innovation in the fashion industry. “Try
                    before you buy ” worked years ago for efficient customer
                    engagement in outfit stores. Now the concept is gradually
                    being replaced via virtual trial rooms which let customers
                    try clothes virtually that translates into eliminating long
                    queues and waiting periods in front of trail rooms.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </section>
        {/* latest work section end */}

        {/* industry we serve section start */}

        <section>
          <main className="industry_container row">
            <div className="industry_Leftparagraph col-lg-6 col-md-12 col-sm-12">
              <p className="industry_leftparagraph_heading">
                INDUSTRY WE SERVE
              </p>
              <p className="industry_leftparagraph_para">
                Best <b> IT Consulting </b> Company Across Different
                <b> Industry </b> Verticals
              </p>
            </div>
            <div className="industry_Rightparagraph col-lg-6 col-md-12 col-sm-12">
              <p className="industry_Rightparagraph_paragraph">
                With a proven track record of completing high-quality projects
                under expert supervision and within your budget, we have
                connected numerous organizations with outstanding software
                developers for custom software development. We have an expansive
                reach and serve multiple domains. Join hands with one of top
                custom software development companies to hire software
                developers for different industry verticals.
              </p>
            </div>
          </main>

          {/* card industry or div  two  */}
          <main>
            <CardIndustry />
          </main>
        </section>

        {/* industry we serve section end */}

        {/* ARCHIEVEMENTS section START */}
        <section>
          <main className="ARCHIEVEMENT_Container row">
            <div className="ARCHIEVEMENT_LEFT_DIV col-6">
              <p className="ARCHIEVEMENT_LEFT_DIV_heading">
                Interested To <b>Develop</b> Your Own <b>App/Web?</b> Take A
                Glance
              </p>
              <ReactPlayer
                width="80%"
                height="320px"
                url="https://www.youtube.com/watch?v=UalTfOIDQ7M"
                controls
              />
              <button className="ARCHIEVEMENT_LEFT_button">CONTACT US</button>
            </div>
            <div className="ARCHIEVEMENT_rightwork_container col-6">
              <div>
                <p className="ARCHIEVEMENT_rightwork_word">ARCHIEVEMENTS</p>
                <p className="ARCHIEVEMENT_rightwork_heading">
                  <b>Award-Winning</b> Outsourcing IT Company
                </p>
                <p className="ARCHIEVEMENT_rightwork_paragraph">
                  We are proud to showcase our awards and accolades in the IT
                  industry for software development. Our accomplishments are
                  proof of our excellent services and innovative solutions.
                </p>
              </div>
              <div className="ARCHIEVEMENT_rightwork_logodiv">
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={iso}
                    alt="iso"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={clutch}
                    alt="clutch"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={nasscom}
                    alt="nasscom"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={upwork}
                    alt="upwork"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={goodfirm}
                    alt="goodfirm"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={itfirm}
                    alt="itfirm"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={appfutura}
                    alt="appfutura"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={google}
                    alt="google"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={softwareworld}
                    alt="softwareworld"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>

                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={crowdreview}
                    alt="crowdreview"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={gesia}
                    alt="igesiaso"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <img
                    src={freelancer}
                    alt="freelancer"
                    className="ARCHIEVEMENT_rightwork_logo"
                  />
                </div>
              </div>
            </div>
          </main>
        </section>

        {/* ARCHIEVEMENTS section END */}

        {/* TrustedBy section start */}
        <section className="TrustedBy_section">
          {/* ConsultingServices top paragraph start */}
          <div className="TrustedBy_container row">
            <div className="col-6">
              <p className="TrustedBy_leftparagraph_heading">TRUSTED BY</p>
              <p className="TrustedBy_leftparagraph_para">
                <b> Global Leaders </b> For Custom Software Development
              </p>
            </div>
            <div className="TrustedBy_Rightparagraph col-6">
              <p className="TrustedBy_Rightparagraph_paragraph">
                Global Leaders Trust Us as their IT Services Company From
                startups to large-scale enterprises, we have helped our clients
                generate more sales with sustainable software solutions. As an
                eminent offshore software development company, clients across
                the globe trust us with their software development projects.
              </p>
            </div>
          </div>
          {/* ConsultingServices top paragraph end */}
          {/* TrustedBy card start */}
          <div>
            <CardTruestedBy />
          </div>
          {/* TrustedBy card end */}
          <div className="TrustedBy_button_div">
            <button className="TrustedBy_button">GET FREE CONSULTATION</button>
          </div>
        </section>

        {/* TrustedBy section end */}

        {/* TECHNICAL BLOG SECTION START */}

        <section>
          <main className="BLOG_row row">
            <div className="BLOG_Left_col col-6">
              <div>
                <p className="BLOG_heading">TECHNICAL BLOGS</p>
                <p className="BLOG_paragraph">
                  Latest <b>Blogs</b> And <b>News</b>
                </p>
                <p>
                  Stay updated with the latest development insights,
                  technologies,trends.
                </p>
              </div>

              {/* client say  video card */}
              {/* Blog_Picture_one */}
              <div id="Blog_Picture_one" className="Blog_Picture_div">
                <p className="Blog_Picture_div_para">
                  Best Useful Apps for Students on iPad, iPhone, Android (2022)
                </p>
              </div>
              {/* Blog_Picture_Two */}
              <div id="Blog_Picture_Two" className="Blog_Picture_div">
                <p className="Blog_Picture_div_para">
                  Best NFT Tokens & Coins to Buy in 2022 [Non Fungible Tokens
                  List]
                </p>
              </div>
            </div>
            <div className="col-6">
              {/* Blog_Picture_Three */}
              <div id="Blog_Picture_Three" className="Blog_Picture_div">
                <p className="Blog_Picture_div_para">
                  45+ Best Online Business Ideas for Beginners in 2022 [Easy to
                  Start]
                </p>
              </div>
              {/* Blog_Picture_Four */}
              <div id="Blog_Picture_Four" className="Blog_Picture_div">
                <p className="Blog_Picture_div_para">
                  Low-Cost Business Ideas with High Profit -Start With Low
                  Investment
                </p>
              </div>

              <div className="blog_button_Div">
                <button className="blog_button">VIEW ALL TESTIMONIALS</button>
              </div>
            </div>
          </main>
        </section>

        {/* TECHNICAL BLOG SECTION END */}
      </div>
    </div>
  );
};

export default LatestWork;
