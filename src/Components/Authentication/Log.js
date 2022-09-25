import React from "react";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
const Log = (props) => {
  return (
    <React.Fragment>
      <div className={classes.login}>
        <h1>Login</h1>
        <form method="post">
          <input
            type="email"
            name="u"
            placeholder="JUIT-ID"
            required="required"
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <button
            type="submit"
            onClick={props.OnLogin}
            className={`${classes.btn} ${classes["btn-primary"]} ${classes["btn-block"]} ${classes["btn-large"]}`}
          >
            <NavLink to="/home">Let me in.</NavLink>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Log;
