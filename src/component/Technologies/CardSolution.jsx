import React from "react";
import { RiComputerLine } from "react-icons/ri";

const CardSolution = () => {
  return (
    <div>
      <div
        class="card"
        style={{
          width: "12.5rem",
          height: "11rem",
          borderRadius: "16px",
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
