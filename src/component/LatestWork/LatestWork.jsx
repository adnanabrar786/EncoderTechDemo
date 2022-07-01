import React from "react";
import CardIndustry from "./CardIndustry";
import "./LatestWork.css";
import ReactPlayer from "react-player";
import CardTruestedBy from "./CardTruestedBy";
import { SiUpwork } from "react-icons/si";

// discuss section
// Latest work
// industry we serve or services
// ARCHIEVEMENTS
// TrustedBy section

const LatestWork = () => {
  return (
    <div>
      <div className="LatestWork_container">
        {/* discuss your project  start */}

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
              <button className="Talkexpert_button">
                TALK TO OUR EXPERTS
              </button>
            </div>
          </div>
        </section>

        {/* discuss your project  end */}

        {/* latest work start */}
        <section>
          <main className="latestWork_main row">
            <div className="col-6">
              <p className="LatestWork_word">LATEST WORK</p>
              <p className="LatestWork_heading">
                Our <b>Notable</b> Offshore Software Development
                <b>Case Studies</b>
              </p>
              <p className="LatestWork_paragraph">
                We are one of the best IT Consulting companies that handle all
                aspects of software creation. Hire web developers who excel in a
                wide range of technology solutions and build websites that are
                efficient, flexible, and easy to maintain. Also, we help you to
                hire app developers who develop bespoke applications to help you
                redefine customer experiences.
              </p>
              <button className="LatestWork_button">
                VIEW ALL CASE STUDIES
              </button>
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
            <div className="col-6">
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
        {/* latest work end */}

        {/* industry we serve start */}

        <section>
          <main className="industry_container row">
            <div className="industry_Leftparagraph col-6">
              <p className="industry_leftparagraph_heading">
                INDUSTRY WE SERVE
              </p>
              <p className="industry_leftparagraph_para">
                Best <b>IT Consulting</b> Company Across Different
                <b>Industry</b> Verticals
              </p>
            </div>
            <div className="industry_Rightparagraph col-6">
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

        {/* industry we serve end */}

        {/* ARCHIEVEMENTS WORK START */}
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
              <button className="ARCHIEVEMENT_LEFT_button">
                 CONTACT US
              </button>
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
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
                <div className="ARCHIEVEMENT_rightwork_logo_Subdiv">
                  <SiUpwork className="ARCHIEVEMENT_rightwork_logo" />
                </div>
              </div>
            </div>
          </main>
        </section>

        {/* ARCHIEVEMENTS WORK END */}

        {/* TrustedBy start */}
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
            <button className="TrustedBy_button">
              GET FREE CONSULTATION
            </button>
          </div>
        </section>

        {/* TrustedBy end */}
      </div>
    </div>
  );
};

export default LatestWork;
