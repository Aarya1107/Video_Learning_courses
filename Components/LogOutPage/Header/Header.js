import React, { useState } from "react"
import classes from "./Header.module.css"
import MoreApps from "./MoreApps"
import Logo from "../../../assests/Pinnacle_colored_logo.svg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import SearchBar from "./SearchBar"
import { BsGlobe } from "react-icons/bs"
import { GrApps } from "react-icons/gr"
import Languages from "../Language/Languages"
import { useNavigate } from "react-router-dom"
import HoverCart from "./HoverCart"
export default function Header() {
  const [showMoreApps, setShowMoreApp] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)

  const navigate = useNavigate()

  const MoreAppsHandler = () => {
    setShowMoreApp(!showMoreApps)
  }

  const LanguageHandler = () => {
    setShowLanguage(!showLanguage)
  }

  return (
    <div className={classes.Header_fullPage}>
      <div className={classes.main}>
        <div className={classes.logo_div} onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className={classes.logo_img} />
        </div>
        <div className={classes.subnav}>
          <div className={classes.subnavbtn}>Categories</div>
          <div className={classes.subnav_content}>
            <div className={classes.subnav_content_subnav}>
              <div className={classes.subnavbtn2x}>
                <a className={classes.item} href="/">
                  SSC CGL
                  <div className={classes.arrw_icon1}>
                    <MdOutlineKeyboardArrowRight
                      className={classes.arrow}
                      size={20}
                    />
                  </div>
                </a>
              </div>
              <div className={classes.subnav_content2x}>
                <a href="/">Quantative Aptitude</a>
                <a href="/">General Science</a>
                <a href="/">Computer Science</a>
                <a href="/">Qualitative Aptitude</a>
              </div>
            </div>
            <div className={classes.subnav_content_subnav}>
              <div className={classes.subnavbtn2x}>
                <a className={classes.item} href="/">
                  SSC CHSL{" "}
                  <div className={classes.arrw_icon2}>
                    <MdOutlineKeyboardArrowRight
                      className={classes.arrow}
                      size={20}
                    />
                  </div>{" "}
                </a>
              </div>
              <div className={classes.subnav_content2x}>
                <a href="/">Quantative Aptitude1</a>
                <a href="/">General Science1</a>
                <a href="/">Computer Science1</a>
                <a href="/">Qualitative Aptitude1</a>
              </div>
            </div>
            <div className={classes.subnav_content_subnav}>
              <div className={classes.subnavbtn2x}>
                <a className={classes.item} href="/">
                  SSC MTS{" "}
                  <div className={classes.arrw_icon3}>
                    <MdOutlineKeyboardArrowRight
                      className={classes.arrow}
                      size={20}
                    />
                  </div>{" "}
                </a>
              </div>
              <div className={classes.subnav_content2x}>
                <a href="/">Quantative Aptitude2</a>
                <a href="/">General Science2</a>
                <a href="/">Computer Science2</a>
                <a href="/">Qualitative Aptitude2</a>
              </div>
            </div>
            <div className={classes.subnav_content_subnav}>
              <div className={classes.subnavbtn2x}>
                <a className={classes.item} href="/">
                  Railway{" "}
                  <div className={classes.arrw_icon4}>
                    <MdOutlineKeyboardArrowRight
                      className={classes.arrow}
                      size={20}
                    />
                  </div>
                </a>
              </div>
              <div className={classes.subnav_content2x}>
                <a href="/">Quantative Aptitude1</a>
                <a href="/">General Science1</a>
                <a href="/">Computer Science1</a>
                <a href="/">Qualitative Aptitude1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
      <div className={classes.playStore_icone}>
        <button className={classes.Playstore_btn}>
          <img
            src="./images/playstore.png"
            alt=""
            width="25px"
            height="25px"
            className={classes.playStore_image}
          />
        </button>
        <div className={classes.Playstore_description}>
          <a
            href="https://play.google.com/store/search?q=pinnacle&c=apps&hl=en-IN"
            target="blank"
            className={classes["Playstore-a"]}
          >
            Download Mobile app
          </a>
        </div>
      </div>
      <div className={classes.cart_icone} onClick={() => navigate("/cart")}>
        <HoverCart />
      </div>
      <div className={classes.login}>
        <button
          className={classes.login_btn}
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </div>
      <div className={classes.signup}>
        <button
          className={classes.signup_btn}
          onClick={() => navigate("/sighup")}
        >
          Sign up
        </button>
      </div>
      <div className={classes.globe_icon}>
        <BsGlobe size={20} onClick={LanguageHandler} />
      </div>
      <div className={classes.Languages_div}>
        {showLanguage && <Languages />}
      </div>
      <div className={classes.moreapp_icon}>
        <button onClick={MoreAppsHandler} className={classes["MoreApps-btn"]}>
          <GrApps size={20} />
        </button>
      </div>
      <div className={classes.moreApps_div}>{showMoreApps && <MoreApps />}</div>
    </div>
  )
}
