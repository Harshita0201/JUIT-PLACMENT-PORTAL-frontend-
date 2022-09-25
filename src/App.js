import React, { Suspense, useState } from "react";
import classes from "./App.module.css";
// import Login from "./Components/Authentication/Login";
import LogIn from "./Components/Authentication/Login";
import Home from "./Components/Dashboard/Home";
import CompanyDetails from "./Components/AdminForms/CompanyDetails";
import NavBarPortal from "./Components/Dashboard/NavBar";
import { authActions } from "./Store/auth";
import { useSelector, useDispatch } from "react-redux";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Route } from "react-router-dom";
import Register from "./Components/Authentication/Register";
import StudentFeedback from "./Components/AdminForms/StudentFeedback";
import FeedbackData from "./Components/FeedbackFormData/feedbackData";
import Resources from "./Components/Dashboard/Resources/Resources";
const App = (props) => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  // const dispatch = useDispatch();
  // function LoginHandler() {
  //   dispatch(authActions.login());
  // }
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <Route path="/" exact>
        <LogIn />
        <Particles
          className={classes.particles}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: `{linear-gradient(
    90deg,
    rgba(35, 33, 77, 1) 2%,
    rgba(9, 121, 106, 1) 33%,
    rgba(0, 212, 255, 1) 100%
  )}`,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 65,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </Route>
      <Route path="/register">
        <Register />
        <Particles
          className={classes.particles}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: `{linear-gradient(
    90deg,
    rgba(35, 33, 77, 1) 2%,
    rgba(9, 121, 106, 1) 33%,
    rgba(0, 212, 255, 1) 100%
  )}`,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 65,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </Route>

      <Route path="/updates">
        <NavBarPortal />
        <CompanyDetails />
      </Route>
      <Route path="/home">
        <NavBarPortal />
        <Home />
      </Route>
      <Route path="/studentfeedbackform">
        <NavBarPortal />
        <StudentFeedback />
      </Route>
      <Route path="/studentfeedbackdata">
        <NavBarPortal />
        <FeedbackData companyName="Google" />
      </Route>
      <Route path="/resources">
        <NavBarPortal />
        <Resources />
      </Route>
    </React.Fragment>
  );
};
export default App;
