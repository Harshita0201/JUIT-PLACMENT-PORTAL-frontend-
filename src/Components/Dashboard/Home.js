import React from "react";
import CompanyData from "../FeedbackFormData/feedbackData";
//import classes from './Home.module.css';
import ComTable from "./ComTable";

const Home = (props) => {
  return (
    <React.Fragment>
      <ComTable />
      {/* <CompanyData companyName="Google" /> */}
    </React.Fragment>
  );
};

export default Home;
