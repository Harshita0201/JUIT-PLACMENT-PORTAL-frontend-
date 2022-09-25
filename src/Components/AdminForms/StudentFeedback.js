import classes from "./CompanyDetails.module.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StudentDetails from "./StudentDetails";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import useHttp from "../../hooks/UseHttp1";
import { useDispatch } from "react-redux";
import Round1 from "./Round1";
import Round2 from "./Round2";
import { propTypes } from "react-bootstrap/esm/Image";
const StudentFeedback = () => {
  // const [counter, setCounter] = useState(1);
  // const positiveCountHandler = () => {
  //   setCounter((precount) => {
  //     return precount + 1;
  //   });
  //   console.log(counter);
  // };
  // const negativeCountHandler = () => {
  //   setCounter((precount) => {
  //     return precount - 1;
  //   });
  //   console.log(counter);
  // };

  const {
    isLoading: sendingDetails,
    error: sendingError,
    sendRequest: sendCompanyDetails,
  } = useHttp();
  // const { isLoading:gettingDetails, error:gettingError, sendRequest: getCompanyDetails } = useHttp();

  // const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  const applyData = (data) => {
    console.log(data);
  };
  // const dispatch = useDispatch();
  const {
    control,
    resetField,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data) => {
    // const newdata = {
    //   ...data,
    //   date: startDate,
    // };
    // console.log(newdata);
    // dispatch(DataActions.postData(data));
    sendCompanyDetails(
      {
        url: "http://localhost:3001/companydata",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: data,
      },
      applyData
    );

    const fields = ["company", "title", "package", "description"];
    fields.map((items) => resetField(items));
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className={classes.app}>
        <h1 style={{ color: "white" }}>
          Campus Placement Interview Review Form
        </h1>
        <FormProvider {...methods}>
          <form
            className={classes.form}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <StudentDetails />
            <Round1 />
            <Round2
              roundno={2}
              hr={"hrRound2"}
              technical={"technicalRound2"}
              gd={"gdRound2"}
            />
            <Round2
              roundno={3}
              hr={"hrRound3"}
              technical={"technicalRound3"}
              gd={"gdRound3"}
            />
            <Round2
              roundno={4}
              hr={"hrRound4"}
              technical={"technicalRound4"}
              gd={"gdRound4"}
            />
            <Round2
              roundno={5}
              hr={"hrRound5"}
              technical={"technicalRound5"}
              gd={"gdRound5"}
            />
            <Round2
              roundno={6}
              hr={"hrRound6"}
              technical={"technicalRound6"}
              gd={"gdRound6"}
            />
            <div
              className={classes["form-action"]}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button style={{ color: "white" }} type="submit">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </React.Fragment>
  );
};

export default StudentFeedback;
