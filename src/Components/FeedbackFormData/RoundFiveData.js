import React from "react";
import "./Round.css";
import Card from "../UI/Card";
import Aptitude from "./Aptitude";
import Technical from "./Technical";
import Gd from "./Gd";
const RoundFiveData = (props) => {
  return (
    <div className="sectionround">
      <h1>Round 5</h1>
      <Aptitude />
      <Technical />
      <Gd />
    </div>
  );
};
export default RoundFiveData;
