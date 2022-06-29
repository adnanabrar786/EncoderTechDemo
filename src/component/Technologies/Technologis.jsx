import React from "react";
import CardSolution from "./CardSolution";
import "./Technologies.css";
import CardTechnologies from "./CardTechnologies";


// Technologis
// Solution section

const Technologis = () => {
  return (
    <div>
      <div className="Technologis_container">
        {/* Technologis top paragraph start */}
        <div className="Technologies_paragraph_container row">
          <div className="col-6">
            <p className="Technologies_leftparagraph_heading">TECHNOLOGIES</p>
            <p className="Technologies_leftparagraph_para">
              Array Of Top-Notch <b>Technologies</b> For Outsourcing
              <b>Software</b> Development
            </p>
          </div>
          <div className="Technologies_Rightparagraph col-6">
            <p className="Technologies_Rightparagraph_paragraph">
              Our certified software developers have hands-on experience working
              for different technologies towards the sole purpose of developing
              best-in-class custom software that suits your specific business
              needs.
            </p>
          </div>
        </div>
        {/* Technologis top paragraph end */}

        {/* Technologis Card start */}
        <div>
          <CardTechnologies />
        </div>
        {/* Technologis Card end */}
      </div>

      {/* solution work start */}
      {/* solution left work */}
      <section>
        <div className="solution_container row">
          <div className="col-6">
            <p className="solution_word">SOLUTION</p>
            <p className="solution_heading">
              <b>Hire Developers</b> For Custom IT Solutions
            </p>
            <p className="solution_paragraph">
              We are one of the best IT Consulting companies that handle all
              aspects of software creation. Hire web developers who excel in a
              wide range of technology solutions and build websites that are
              efficient, flexible, and easy to maintain. Also, we help you to
              hire app developers who develop bespoke applications to help you
              redefine customer experiences.
            </p>
            <button className="Talkexpert_button">
              TALK TO OUR EXPERTS
              <i
                class="bi bi-arrow-up-right"
                style={{ paddingLeft: "5px" }}
              ></i>
            </button>
          </div>
          {/* solution right work */}
          <div className="col-6">
              <CardSolution/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologis;
