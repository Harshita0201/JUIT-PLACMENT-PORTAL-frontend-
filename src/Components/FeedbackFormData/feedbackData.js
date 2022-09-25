import React, { useState, useEffect, Suspense } from "react";
import useHttp from "../../hooks/UseHttp1";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import RoundOneData from "./RoundOneData";
import { useDispatch } from "react-redux";
import { feedbackDataActions } from "../../Store/feedbackdata";
import RoundTwoData from "./RoundTwoData";
import RoundThreeData from "./RoundThreeData";
import RoundFourData from "./RoundFourData";
import RoundFiveData from "./RoundFiveData";
import RoundSixData from "./RoundSixData";
import Background from "./studentdata.jpeg";
const FeedbackData = ({ companyName }) => {
  const { isLoading, error, sendRequest: getCompanyDataDetails } = useHttp();
  // const [getdata, setData] = useState();
  const dispatch = useDispatch();
  const GetData = (data) => {
    console.log(data);
    // setData(data);
    dispatch(feedbackDataActions.getData(data));
    // console.log(getdata);
  };

  // console.log(getdata);
  useEffect(() => {
    getCompanyDataDetails(
      {
        url: `http://localhost:3001/companyData/${companyName}`,
      },
      GetData
    );
  }, []);
  // const getdata = useSelector((state) => state.feedbackdata.data);
  return (
    <React.Fragment>
      <div>
        <img src={Background}></img>
        {/* <Card data={getdata} /> */}

        {/* <RoundOneData
          aptitude={getdata.aptitudeRound1}
          technical={getdata.technicalRound1}
        />
        <RoundTwoData
          gd={getdata.gdRound2}
          technical={getdata.technicalRound2}
          aptitude={getdata.aptitudeRound2}
        />
        <RoundThreeData
          gd={getdata.gdRound3}
          technical={getdata.technicalRound3}
          aptitude={getdata.aptitudeRound3}
        />
        <RoundFourData
          gd={getdata.gdRound4}
          technical={getdata.technicalRound4}
          aptitude={getdata.aptitudeRound4}
        />
        <RoundFiveData
          gd={getdata.gdRound5}
          technical={getdata.technicalRound5}
          aptitude={getdata.aptitudeRound5}
        />
        <RoundSixData
          gd={getdata.gdRound6}
          technical={getdata.technicalRound6}
          aptitude={getdata.aptitudeRound6}
        /> */}
      </div>
    </React.Fragment>
  );
};

export default FeedbackData;
