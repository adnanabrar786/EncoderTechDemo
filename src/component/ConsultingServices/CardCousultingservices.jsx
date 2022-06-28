import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const CardCousultingservices = () => {
  return (
    <div
      className="CardCousultingservices_card_container card"
      style={{
        width: "19rem",
        height: "23.5rem",
        borderRadius: "16px",
        paddingTop: "10px",
      }}
    >
      <div className="card-body">
        <p>
          <FaMobileAlt className="CardCousultingservices_cradIcon"/>
        </p>
        <h5 className="CardCousultingservices_card_heading">
          Mobile App Development
        </h5>
        <p className="CardCousultingservices_card_paragraph">
          As the best mobile app development company, we are experts in
          developing native and cross-platform mobile apps suitable for all
          business verticals.
        </p>
        <p>
          <FaRegShareSquare className="CardCousultingservices_ShareIcon" />
        </p>
      </div>
    </div>
  );
};

export default CardCousultingservices;
