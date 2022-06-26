import React from "react";
import CardIndustry from "./CardIndustry";
import "./LatestWork.css";

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
                <i
                  class="bi bi-arrow-up-right"
                  style={{ paddingLeft: "5px" }}
                ></i>
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
                Our <b>Notable</b> Offshore Software Development{" "}
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
                <i
                  class="bi bi-arrow-up-right"
                  style={{ paddingLeft: "10px" }}
                ></i>
              </button>
              <div className="LatestWork_leftbox"></div>
            </div>
            <div className="col-6">
              <div className="LatestWork_leftbox"></div>
              <div className="LatestWork_leftbox"></div>
            </div>
          </main>
        </section>
        {/* latest work end */}

        {/* industry we serve start */}

        <section>
          <main className="industry_container row">
            <div className="industry_Leftparagraph col-6">
              <p className="industry_leftparagraph_heading">SERVICES</p>
              <p className="industry_leftparagraph_para">
                Best <b>IT Consulting</b> Company Across Different{" "}
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
          {/* div  two */}
          <div className="CardIndustry_map_container">
            <div className="CardIndustry_map_Sub_container">
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
            </div>
            <div className="CardIndustry_map_Sub_container">
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
              <CardIndustry />
            </div>
          </div>
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
              <div className="ARCHIEVEMENT_LEFT_DIV_video">video</div>
              <div className="ARCHIEVEMENT_LEFT_button_div">
                <button className="ARCHIEVEMENT_LEFT_button">
                  TALK TO OUR EXPERTS
                  <i
                    class="bi bi-arrow-up-right"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-6"></div>
          </main>
        </section>

        {/* ARCHIEVEMENTS WORK END */}
      </div>
    </div>
  );
};

export default LatestWork;
