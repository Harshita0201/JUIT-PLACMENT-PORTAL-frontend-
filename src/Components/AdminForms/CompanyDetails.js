import classes from "./CompanyDetails.module.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import useHttp from "../../hooks/UseHttp1";

import { useDispatch } from "react-redux";
import { DataActions } from "../../Store/CompanyData";
const CompanyDetails = () => {
  const {
    isLoading: sendingDetails,
    error: sendingError,
    sendRequest: sendCompanyDetails,
  } = useHttp();
  // const { isLoading:gettingDetails, error:gettingError, sendRequest: getCompanyDetails } = useHttp();

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const applyData = (data) => {
    console.log(data);
  };
  const dispatch = useDispatch();
  const {
    control,
    resetField,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newdata = {
      ...data,
      date: startDate,
    };
    console.log(newdata);
    dispatch(DataActions.postData(data));
    sendCompanyDetails(
      {
        url: "http://localhost:3001/placementUpdates",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newdata,
      },
      applyData
    );

    const fields = ["company", "title", "package", "description"];
    fields.map((items) => resetField(items));
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#4b5162" }} className={classes.app}>
        <h1 style={{ color: "white" }}>Add Details of companies</h1>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
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
                  htmlFor="date"
                >
                  Date
                </label>
                <DatePicker
                  id="date"
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
                  htmlFor="title"
                >
                  Job Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  id="title"
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
                  htmlFor="package"
                >
                  Package
                </label>
                <input
                  {...register("package")}
                  type="text"
                  id="package"
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
                  htmlFor="description"
                >
                  Job Discription
                </label>
                <Controller
                  control={control}
                  name="description"
                  render={({
                    field: { id, rows, cols, name, defaultValue },
                  }) => (
                    <textarea
                      {...register("description")}
                      name="description"
                      id="description"
                      defaultValue=""
                      rows="5"
                      cols="50"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div
            className={classes["form-action"]}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button style={{ color: "white" }} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CompanyDetails;
