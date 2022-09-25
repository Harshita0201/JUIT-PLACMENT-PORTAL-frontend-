import React from "react";
import useHttp from "../../hooks/UseHttp1";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Store/auth";
import { useForm, Controller } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
const LogIn = () => {
  const authen = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  let regex = new RegExp("[a-z0-9]+@juitsolan.in");
  const {
    isLoading: sendingDetails,
    error: sendingError,
    sendRequest: sendLogInDetails,
  } = useHttp();
  const {
    control,
    resetField,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(errors.email.message);
  const dispatch = useDispatch();
  const applyData = (data) => {
    // console.log(data);

    // console.log(authen);
    dispatch(authActions.login(data));
    history.replace("/home");
  };

  const onSubmit = (data) => {
    sendLogInDetails(
      {
        url: "http://localhost:3001/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      },
      applyData
    );
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
          class="ba b--transparent ph0 mh0  "
        >
          <legend class="f4 fw6 ph0 mh0 tc">Log In</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="email-address">
              Email
            </label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              {...register("email", {
                validate: (value) =>
                  regex.test(value) === true || "Please use juitsolan id",
              })}
              id="email"
              style={{ borderColor: "black" }}
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  textDecoration: "bold",
                  marginTop: "px",
                }}
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div class="mv3">
            <label className="db fw6 lh-copy f6" for="password">
              Password
            </label>
            <input
              class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              {...register("password")}
              id="password"
              style={{ borderColor: "black" }}
            />
          </div>
        </fieldset>
        <div class="tc ">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
            type="submit"
            value="Log in"
            style={{ color: "black" }}
          >
            LogIn
          </button>

          <NavLink
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
            to="/register"
            style={{ color: "black" }}
          >
            Register
          </NavLink>
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2"
            type="button"
            value="ForgetPassword"
            style={{ color: "black" }}
          >
            Forget Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
