import React from "react";
import Talkexpert from "../../component/Talkexperts/Talkexpert";
import LatestWork from "../../component/LatestWork/LatestWork";
import Technologis from "../../component/Technologies/Technologis";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home_container">
      <Talkexpert />
      <Technologis />
      <LatestWork />
    </div>
  );
};

export default Home;
