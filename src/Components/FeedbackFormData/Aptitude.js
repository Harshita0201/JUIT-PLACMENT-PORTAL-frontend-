import React from "react";
import "./Round.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
const Aptitude = (props) => {
  //   const getdata = useSelector((state) => state.feedbackdata.data);
  return (
    <div className="sectionround">
      <h1>Aptitude Domain Questions</h1>
      <div className="cardRound">
        <Card />
      </div>
    </div>
  );
};
export default Aptitude;
