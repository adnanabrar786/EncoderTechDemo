import React from "react";
import { RiComputerLine } from "react-icons/ri";

const CardSolution = () => {
  return (
    <div>
      <div
        class="CardSolution_container card"
        style={{
          width: "13.2rem",
          height: "9rem",
          borderRadius: "8px",
          textAlign: "center"
        }}
      >
        <div class="card-body">
          <RiComputerLine className="CardSolution_icon"/>
          <p class="CardSolution_heading card-title">Hire Web Development</p>
        </div>
      </div>
    </div>
  );
};

export default CardSolution;
