import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";
const Card = (props) => {
  //   console.log(props.getdata.companyName);
  // const getdata = useSelector((state) => state.feedbackdata.data);
  // console.log(getdata);
  const array = props.data;
  console.log(array);
  return (
    <div>
      <div class="card">
        {/* <h4 class="hCard">Lorem ipsum</h4> */}
        {/* {array.map((data) => {
          return <p className="pCard">{data}</p>;
        })} */}
      </div>
    </div>
  );
};

export default Card;
