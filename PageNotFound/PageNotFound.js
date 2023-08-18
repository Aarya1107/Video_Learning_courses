import React from "react"
import Styles from "./PageNotFound.module.css"
import Header from "../Components/LogOutPage/Header/Header"
import Footer from "../Components/LogOutPage/Footer/Footer"

export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className={Styles["Error-fullPage"]}>
        <div>
          <p className={Styles["Error-heading"]}>
            <i>Error 404 </i>
          </p>
          <img
            src="./image/Error404.png"
            alt=""
            className={Styles["Error-Image"]}
          ></img>
          <div className={Styles["last-Para-div"]}>
            <p className={Styles["para"]}>
              We can’t find the page you’re looking for
            </p>
            <p>
              Visit our <a href="/">support page </a> for further assistance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
