import React from 'react'
import { RiComputerLine } from "react-icons/ri";


const CardTruestedBy = () => {
  return (
    <div>
      <div
              class="card"
              style={{
                width: "16rem",
                height: "10rem",
                textAlign: "center",
              }}
            >
              <div class="card-body">
                <RiComputerLine className="CardSolution_icon" />
              </div>
            </div>
    </div>
  )
}

export default CardTruestedBy
