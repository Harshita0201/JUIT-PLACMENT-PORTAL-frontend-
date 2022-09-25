import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/UseHttp1";

import classes from "./Table.module.css";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const ComTable = () => {
  const { isLoading, error, sendRequest: getCompanyDetails } = useHttp();
  const [getdata, setData] = useState([]);
  const addedData = useSelector((state) => state.data.data);
  const GetData = (data) => {
    console.log(data);
    setData(data);
    // console.log(getdata);
  };
  const companyDataHandler = () => {
    console.log("hi");
  };
  useEffect(() => {
    getCompanyDetails(
      {
        url: "http://localhost:3001/placementUpdates",
      },
      GetData
    );
  }, [addedData]);
  console.log(getdata);
  return (
    <React.Fragment>
      <div style={{ margin: "50px" }} className={classes.Table}>
        <h1>
          <span className={classes.blue}></span>{" "}
          <span style={{ color: "#404552" }}>Placement Updates</span>
        </h1>
        <br />
        <Table
          style={{
            border: "7px",
            borderStyle: "solid",
            borderColor: "pink",
          }}
          striped
          responsive
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>
                <h1>Companies</h1>
              </th>
              <th>
                <h1>Date</h1>
              </th>
              <th>
                <h1>Job Title</h1>
              </th>
              <th>
                <h1>Package</h1>
              </th>
              <th>
                <h1>Job Description</h1>
              </th>
            </tr>
          </thead>
          {getdata.map((getdata) => {
            return (
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <NavLink
                      // onClick={companyDataHandler}

                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      to="/studentfeedbackdata"
                    >
                      {getdata.company}
                    </NavLink>
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    {getdata.date.substring(0, 10)}
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    {getdata.title}
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    {getdata.package}
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      fontSize: "15px",
                    }}
                  >
                    {getdata.description}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </React.Fragment>
  );
};

export default ComTable;
