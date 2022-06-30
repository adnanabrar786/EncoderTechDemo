import React from "react";
import { RiHeartAddFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
import education from "./industryImages/education.png"
import { GiBank } from "react-icons/gi";
import lifestyle from "./industryImages/lifestyle.jpg"
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { GiLaserSparks } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { ImTruck } from "react-icons/im";


const CardIndustry = () => {
  return (
    <div>
      {/* card industry or div  two  */}
      <div className="CardIndustry_map_container">
        {/* one */}
        <div className="CardIndustry_container">
            <RiHeartAddFill style={{color: "#3cde85"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">HEALTH CARE</p>
        </div>

        {/* two */}
        <div className="CardIndustry_container">
            <BsFillCartCheckFill style={{color: "#ebd800"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">E-Commerce</p>
        </div>

        {/* three */}
        <div className="CardIndustry_container">
          <img src={education} alt ="education" className="CardIndustry_icon"/>
            {/* <RiHeartAddFill style={{color: ""}} className="CardIndustry_icon" /> */}
            <p className="CardIndustry_icon_para">Education</p>
        </div>

        {/* four */}
        <div className="CardIndustry_container">
            <GiBank style={{color: "#22e8f5"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Banking</p>
        </div>

        {/* five*/}
        <div className="CardIndustry_container">
        <img src={lifestyle} alt ="education" className="CardIndustry_icon"/>
            <p className="CardIndustry_icon_para">LifeStyle</p>
        </div>

        {/* six*/}
        <div className="CardIndustry_container">

            <MdOutlineSportsVolleyball style={{color: "#d00ab9"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Sports</p>
        </div>

        {/* seven */}
        <div className="CardIndustry_container">
            <MdOutlineDinnerDining style={{color: "#d00ab9"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Food & Resturants</p>
        </div>

        {/* eight */}
        <div className="CardIndustry_container">
            <SiYourtraveldottv style={{color: "#3ebddc"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Travel</p>
        </div>

        {/* nine */}
        <div className="CardIndustry_container">
            <MdOutlineConnectWithoutContact style={{color: "#9cb0ed"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Social</p>
        </div>

       {/* ten */}
       <div className="CardIndustry_container">
            <GiLaserSparks style={{color: "#e2e15f"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Entertainment</p>
        </div>

        {/* eleven */}
        <div className="CardIndustry_container">
            <IoGameController style={{color: "#37daaa"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Games</p>
        </div>

        {/* twelve */}
        <div className="CardIndustry_container">
        <ImTruck style={{color: "#1c8f99"}} className="CardIndustry_icon" />
            <p className="CardIndustry_icon_para">Transportation</p>
        </div>

     
      </div>
    </div>
  );
};

export default CardIndustry;
