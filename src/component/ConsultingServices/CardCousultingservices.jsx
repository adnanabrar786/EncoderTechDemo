import React from "react";
import Card from "react-bootstrap/Card";
import { FaMobileAlt } from "react-icons/fa";
import { GrShare } from "react-icons/gr";

const CardCousultingservices = () => {
  return (
    <div>
      <Card style={{ width: "22rem", height: "30rem" , borderRadius:"16px" , paddingTop :"10px" }}>
        <Card.Body>
          <p className="CardCousultingservices_cradIcon_para">
            <FaMobileAlt className="CardCousultingservices_cradIcon" />
          </p>
          <h5 className="CardCousultingservices_card_heading">Mobile App Development</h5>
          <p className="CardCousultingservices_card_paragraph">
            As the best mobile app development company, we are experts in
            developing native and cross-platform mobile apps suitable for all
            business verticals.
          </p>
          <p className="CardCousultingservices_ShareIcon_para">
            <GrShare className="CardCousultingservices_ShareIcon" />
          </p>
          {/* <Card.Link href="#">Another Link</Card.Link>  */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCousultingservices;
