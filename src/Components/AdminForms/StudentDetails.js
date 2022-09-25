import classes from "./CompanyDetails.module.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import useHttp from "../../hooks/UseHttp1";
import { useDispatch } from "react-redux";
import { DataActions } from "../../Store/CompanyData";
import Feedback from "react-bootstrap/esm/Feedback";
import Round1 from "./Round1";
import { propTypes } from "react-bootstrap/esm/Image";
const StudentDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const { register, control } = useFormContext();

  return (
    <React.Fragment>
      <div className={classes.app}>
        <div className={classes["form-control"]}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="Student Name"
              >
                Student Name
              </label>
              <input
                type="text"
                id="Student Name"
                {...register("Student Name")}
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="Joining Month"
              >
                Joining Month
              </label>
              <DatePicker
                id="Joining Month"
                style={{ color: "black" }}
                selected={startDate}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="Roll No"
              >
                Roll No
              </label>
              <input
                {...register("Roll No")}
                type="text"
                id="Roll No"
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="Contact No."
              >
                Contact No.
              </label>
              <input
                {...register("Contact No.")}
                type="text"
                id="Contact No."
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="companyName"
              >
                Company Placed In
              </label>
              <input
                {...register("companyName")}
                type="text"
                id="companyName"
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="onlineTestVenue"
              >
                Online Test Venue
              </label>
              <input
                {...register("onlineTestVenue")}
                type="text"
                id="onlineTestVenue"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="totalInterviewRound"
              >
                Total Interview Round
              </label>
              <input
                {...register("totalInterviewRound")}
                type="text"
                id="totalInterviewRound"
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="techInterviewVenus"
              >
                Tech Interview Venue
              </label>
              <input
                {...register("techInterviewVenus")}
                type="text"
                id="techInterviewVenus"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="totalAptitudeQuestions"
              >
                Total Aptitude Question
              </label>
              <input
                {...register("totalAptitudeQuestions")}
                type="text"
                id="totalAptitudeQuestions"
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="piInterviewVenus"
              >
                PI Interview Venue
              </label>
              <input
                {...register("piInterviewVenus")}
                type="text"
                id="piInterviewVenus"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="totalDuration"
              >
                Total Duration
              </label>
              <input
                {...register("totalDuration")}
                type="text"
                id="totalDuration"
                style={{ color: "black" }}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginRight: "10px",
                  color: "white",
                }}
                htmlFor="totalTechnicalQuestions"
              >
                Total Technical Question
              </label>
              <input
                {...register("totalTechnicalQuestions")}
                type="text"
                id="totalTechnicalQuestions"
                style={{ color: "black" }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StudentDetails;
