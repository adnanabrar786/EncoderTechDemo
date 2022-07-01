import React from "react";
// import { RiComputerLine } from "react-icons/ri";
import  hinduja from "./images/CradTrustedbyImages/hinduja.jpg"
import  akamai from "./images/CradTrustedbyImages/akamai.png"
import  pepsi from "./images/CradTrustedbyImages/pepsi.png"
import  samsung from "./images/CradTrustedbyImages/samsung.jpg"
import  relience from "./images/CradTrustedbyImages/relience.png"
import  casio from "./images/CradTrustedbyImages/casio.png"
import  jaipurmetero from "./images/CradTrustedbyImages/jaipurmetero.png"
import  alcatelluicent from "./images/CradTrustedbyImages/alcatelluicent.jpg"
import  ericsson from "./images/CradTrustedbyImages/ericsson.png"
import  adani from "./images/CradTrustedbyImages/adani.jpg"



const CardTruestedBy = () => {
  return (
    <>
      <div className="TrustedBy_map_container">
        {/* one */}
        <div
          id="CardTrustedBy_cardOne"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
            <img src={hinduja} alt="hinduja" className="CardSolution_icon"/>
          </div>
        </div>

        {/* two */}
        <div
          id="CardTrustedBy_cardTwo"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={akamai} alt="akamai" className="CardSolution_icon"/>
          </div>
        </div>

        {/* three */}
        <div
          id="CardTrustedBy_cardThree"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={pepsi} alt="pepsi" className="CardSolution_icon"/>
          </div>
        </div>

        {/* four */}
        <div
          id="CardTrustedBy_cardFour"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={samsung} alt="samsung" className="CardSolution_icon"/>
          </div>
        </div>

        {/* five */}
        <div
          id="CardTrustedBy_cardFive"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={relience} alt="relience" className="CardSolution_icon"/>
          </div>
        </div>

        {/* six*/}
        <div
          id="CardTrustedBy_cardSix"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={casio} alt="casio" className="CardSolution_icon"/>
          </div>
        </div>

        {/* seven*/}
        <div
          id="CardTrustedBy_cardSeven"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={jaipurmetero} alt="jaipurmetero" className="CardSolution_icon"/>
          </div>
        </div>

        {/* eight*/}
        <div
          id="CardTrustedBy_cardEight"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={alcatelluicent} alt="alcatelluicent" className="CardSolution_icon"/>
          </div>
        </div>

        {/* nine */}
        <div
          id="CardTrustedBy_cardNine"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={ericsson} alt="ericsson" className="CardSolution_icon"/>
          </div>
        </div>

        {/* ten*/}
        <div
          id="CardTrustedBy_cardTen"
          class="card"
          style={{
            width: "17rem",
            height: "9.5rem",
            textAlign: "center",
          }}
        >
          <div class="card-body">
          <img src={adani} alt="adani" className="CardSolution_icon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTruestedBy;
