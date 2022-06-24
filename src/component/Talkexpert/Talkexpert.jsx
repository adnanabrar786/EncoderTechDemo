import React from "react";
import "./Talkexpert.css";
import roundtables from "./images/roundtables.gif";

const Talkexpert = () => {
  return (
    <div className="container-fluid ">
      <div className="Talkexpert_container row">
        <div className="col-5">
          <p className="Talkexpert_heading">
            <b>Digital</b> Transformation With Modernized Software And
            <b> IT Consulting</b> Services
          </p>
          <p className="Talkexpert_paragraph">
            The Ninehertz is a decade old custom software development company on
            a mission to empower businesses with cutting edge technology to
            thrive in the digital age and to create lasting value by solving the
            problems digitally. With our priority to innovation, we are adept at
            developing high-quality, AI-enabled, smart, and robust software
            solutions for rapid business transformation. Start your journey with
            us to digitize your organization using state-of-art technology to
            build a better, bold, and futuristic business empire.
          </p>

          <button className="Talkexpert_button">
            TALK TO OUR EXPERTS
            <i class="bi bi-arrow-up-right" style={{ paddingLeft: "5px" }}></i>
          </button>
        </div>
        <div className="Talkexpert_right_div col-6">
          <img
            src={roundtables}
            alt="roundtables"
            className="Talkexpert_right_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Talkexpert;
