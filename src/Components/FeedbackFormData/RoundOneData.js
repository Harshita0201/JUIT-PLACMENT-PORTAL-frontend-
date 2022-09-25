import React from "react";
import "./Round.css";
import Card from "../UI/Card";
import Aptitude from "./Aptitude";
import Technical from "./Technical";

const RoundOneData = () => {
  return (
    <div className="sectionround">
      <h1>Round 1</h1>
      <Aptitude />
      <Technical />
    </div>
  );
};
export default RoundOneData;
