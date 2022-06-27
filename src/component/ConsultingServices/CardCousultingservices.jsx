import React from "react";
import Card from "react-bootstrap/Card";
import { FaMobileAlt } from "react-icons/fa";
import { GrShare } from "react-icons/gr";

const CardCousultingservices = () => {
  return (
    <div
      className="card"
      style={{
        width: "19rem",
        height: "23.5rem",
        borderRadius: "16px",
        paddingTop: "10px",
      }}
    >
      <div className="card-body">
        <p className="CardCousultingservices_cradIcon_para">
          <FaMobileAlt className="CardCousultingservices_cradIcon" />
        </p>
        <h5 className="CardCousultingservices_card_heading">
          Mobile App Development
        </h5>
        <p className="CardCousultingservices_card_paragraph">
          As the best mobile app development company, we are experts in
          developing native and cross-platform mobile apps suitable for all
          business verticals.
        </p>
        <p className="CardCousultingservices_ShareIcon_para">
          <GrShare className="CardCousultingservices_ShareIcon" />
        </p>
        {/* <Card.Link href="#">Another Link</Card.Link>  */}
      </div>
    </div>
  );
};

export default CardCousultingservices;
