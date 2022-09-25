import React from "react";
import "./Round.css";
import Card from "../UI/Card";
import Aptitude from "./Aptitude";
import Technical from "./Technical";
import Gd from "./Gd";
const RoundFourData = (props) => {
  return (
    <div className="sectionround">
      <h1>Round 4</h1>
      <Aptitude />
      <Technical />
      <Gd />
    </div>
  );
};
export default RoundFourData;
