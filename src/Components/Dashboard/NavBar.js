import React from "react";
import classes from "./NavBar.module.css";
import logo from "./juit_logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBarPortal = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <nav
        style={{
          backgroundColor: "#7c818c",
          display: "flex",
          justifyContent: "flex-start",
        }}
        className={`${classes.navbar} ${classes.background} ${classes["h-nav-resp"]}`}
      >
        <ul className={`${classes["nav-list"]} ${classes["v-class-resp"]}`}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>

          <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink to="/updates">Updates</NavLink>
          </li>

          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/studentfeedbackform">Student</NavLink>
          </li>

          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
        {/* <div className={`${classes.rightnav} ${classes["v-class-resp"]} `}>
          <input type="text" name="search" id="search" placeholder="Search" />
          <button className={`${classes.btn} ${classes["btn-sm"]}`}>
            Search
          </button>
        </div> */}
        <div className={classes.burger}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBarPortal;
