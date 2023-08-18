import React from "react"
import Timer from "./Header/Timer"
import Header from "./Header/Header"
import PromotionSlider from "../LogOutPage/PromotionSlider/PromotionSlider"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"
import { Link } from "react-router-dom"
export default function HomePage01() {
  return (
    <div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/profile">Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/communication"> Communication</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/error"> Error 404 Page</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/PaymentSteps"> Payment-Steps </Link>
      </div>
      <Timer />
      <Header />
      <div>
        <PromotionSlider />
      </div>
      <Body />
      <Footer />
    </div>
  )
}
