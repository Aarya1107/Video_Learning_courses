import React from "react";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className={classes["Loginpage-fullpage"]}>
        <div className={classes["Loginpage-inner-div"]}>
          <div className={classes["Loginpage-heading"]}>
            Log in to your Pinnacle account
          </div>
          <div className={classes["Google-div"]}>
            <button className={classes["Google-btn"]}>
              <FcGoogle size={25} /> Continue with Google
            </button>
          </div>
          <div className={classes["Google-div"]}>
            <button className={classes["Google-btn"]}>
              <FaFacebook size={25} />
              Continue with Facebook
            </button>
          </div>
          <div className={classes["Google-div"]}>
            <button className={classes["Google-btn"]}>
              <BsApple size={25} /> Continue with Apple
            </button>
          </div>
          <div className={classes["email-div"]}>
            <div className={classes["email-heading"]}>E-mail</div>
            <input className={classes["email-inputbox"]} type="email" />
          </div>
          <div className={classes["password-div"]}>
            <div className={classes["password-heading"]}>Password</div>
            <input className={classes["password-inputbox"]} type="password" />
          </div>
          <button className={classes["Login-btn"]} type="submit">
            Log in
          </button>
          <div className={classes["ForgotPassword-div"]}>
            {" "}
            or <a href="/">Forgot Password</a>
          </div>
          <div className={classes["signup-div"]}>
            Don't have an account?
            <Link to="/sighup"> Sign up Log in with your organization</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
