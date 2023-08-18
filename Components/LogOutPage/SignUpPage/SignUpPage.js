import React from "react";
import classes from "./SignUpPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className={classes["signup-fullpage"]}>
        <div className={classes["signup-heading"]}>
          Sign up and start learning
        </div>
        <div className={classes["email-div"]}>
          <div className={classes["email-heading"]}>Name</div>
          <input className={classes["email-inputbox"]} type="text" />
        </div>
        <div className={classes["email-div"]}>
          <div className={classes["email-heading"]}>E-mail</div>
          <input className={classes["email-inputbox"]} type="email" />
        </div>
        <div className={classes["email-div"]}>
          <div className={classes["email-heading"]}>Password</div>
          <input className={classes["email-inputbox"]} type="password" />
        </div>
        <div className={classes["checkbox-div"]}>
          <input type="checkbox" />
          <p className={classes["checkbox-para"]}>
            Send me special offers, personalized recommendations, and learning
            tips.
          </p>
        </div>
        <button className={classes["signup-btn"]} type="submit">
          Sign up
        </button>
        <p className={classes["tandc-para"]}>
          By signing up, you agree to our <a href="/">Terms of Use</a> and{" "}
          <a href="/">Privacy Policy</a>.
        </p>
        <p className={classes["login-para"]}>
          Already have an account?<Link to="/login">Log in</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
