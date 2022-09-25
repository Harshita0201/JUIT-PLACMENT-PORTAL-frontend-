import React from "react";
import useHttp from "../../hooks/UseHttp1";

import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
const Register = () => {
  const alertHandler = () => {
    alert(
      "Please go to your JUIT Solan ID and verify email and then login from login window."
    );
  };
  const {
    isLoading: sendingDetails,
    error: sendingError,
    sendRequest: sendRegisterDetails,
  } = useHttp();
  const {
    control,
    resetField,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const applyData = (data) => {
    console.log(data);
  };
  const onSubmit = (data) => {
    sendRegisterDetails(
      {
        url: "http://localhost:3001/users",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      },
      applyData
    );
    // console.log(data);
  };
  return (
    <form
      class="br2 ba   b--black mv4 w-100 w-50-m w-25-l mw5 center pa4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div class="measure center">
        <fieldset
          id="sign_up"
          style={{ color: "black" }}
          class="ba b--transparent ph0 mh0 "
        >
          <legend class="f4 fw6 ph0 mh0 tc">Sign In</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="name">
              Name
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              style={{ borderColor: "black" }}
              {...register("name", { required: true })}
              id="name"
            />
          </div>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="email-address">
              Email
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              style={{ borderColor: "black" }}
              {...register("email", { required: true })}
              id="email"
            />
          </div>
          <div class="mv3">
            <label className="db fw6 lh-copy f6" for="password">
              Password
            </label>
            <input
              class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              style={{ borderColor: "black" }}
              {...register("password", { required: true })}
              id="password"
            />
          </div>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="name">
              Roll No.
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="rollno"
              style={{ borderColor: "black" }}
              {...register("rollno", { required: true })}
              id="rollno"
            />
          </div>
        </fieldset>
        <div class="tc ">
          {/* <input
            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
            type="submit"
            value="Log in"
          /> */}
          <button
            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
            type="submit"
            value="Log in"
            style={{ color: "black" }}
            onClick={alertHandler}
          >
            Register
          </button>
          {/* <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
              onClick={console.log("love")}
              value="Register"
            /> */}
        </div>
      </div>
    </form>
  );
};

export default Register;
