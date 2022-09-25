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
import { useDispatch } from "react-redux";
import { DataActions } from "../../Store/CompanyData";
import Feedback from "react-bootstrap/esm/Feedback";
const Round1 = () => {
  const { register, control } = useFormContext();
  return (
    <React.Fragment>
      <div className={classes.app}>
        <h1 style={{ color: "white" }}>Round 1</h1>
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
                htmlFor="aptitudeRound1"
              >
                Aptitude domain question
              </label>
              <Controller
                control={control}
                name="aptitudeRound1"
                render={({ field: { id, rows, cols, name, defaultValue } }) => (
                  <textarea
                    {...register("aptitudeRound1")}
                    name="aptitudeRound1"
                    id="aptitudeRound1"
                    defaultValue=""
                    rows="5"
                    cols="50"
                  />
                )}
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
                htmlFor="technicalRound1"
              >
                Technical domain question
              </label>
              <Controller
                control={control}
                name="technicalRound1"
                render={({ field: { id, rows, cols, name, defaultValue } }) => (
                  <textarea
                    {...register("technicalRound1")}
                    name="technicalRound1"
                    id="technicalRound1"
                    defaultValue=""
                    rows="5"
                    cols="50"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Round1;
