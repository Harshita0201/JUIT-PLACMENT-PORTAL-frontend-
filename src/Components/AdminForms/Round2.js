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
const Round2 = (props) => {
  const { register, control } = useFormContext();
  return (
    <React.Fragment>
      <div className={classes.app}>
        <h1 style={{ color: "white" }}>Round {props.roundno}</h1>
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
                htmlFor="Aptitude domain question"
              >
                Group Disscussion
              </label>
              <Controller
                control={control}
                name={props.gd}
                render={({ field: { id, rows, cols, name, defaultValue } }) => (
                  <textarea
                    {...register(props.gd)}
                    name={props.gd}
                    id={props.gd}
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
                htmlFor="Technical domain question"
              >
                Technical domain question
              </label>
              <Controller
                control={control}
                name={props.technical}
                render={({ field: { id, rows, cols, name, defaultValue } }) => (
                  <textarea
                    {...register(props.technical)}
                    name={props.technical}
                    id={props.technical}
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
                htmlFor="Technical domain question"
              >
                HR
              </label>
              <Controller
                control={control}
                name={props.hr}
                render={({ field: { id, rows, cols, name, defaultValue } }) => (
                  <textarea
                    {...register(props.hr)}
                    name={props.hr}
                    id={props.hr}
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

export default Round2;
