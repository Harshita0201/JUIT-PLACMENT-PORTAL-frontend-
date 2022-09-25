import React from "react";
import "./Round.css";
import Card from "../UI/Card";
const Technical = (props) => {
  let apt = ["Height and Distance", "Time and Distance", "Compound Interest"];
  return (
    <div className="sectionround">
      <h1>Technical Domain Questions</h1>
      <div className="cardRound">
        <Card />
      </div>
    </div>
  );
};
export default Technical;
