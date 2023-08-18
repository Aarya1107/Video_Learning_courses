import React, { useState } from "react"
import classes from "./Account.module.css"
import Card from "../../BodyContent/Card/Card"
import { BsGlobe } from "react-icons/bs"
import { NavLink } from "react-router-dom"
function Account() {
  const [showCard, setShowCard] = useState(false)
  const [language, setLanguage] = useState(false)

  const handleLanguage = () => {
    setLanguage(!language)
  }

  const handleMouseEnter = () => {
    setShowCard(true)
  }

  const handleMouseLeave = () => {
    setShowCard(false)
  }

  return (
    <>
      <div
        className={classes.dropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={classes.account_btn}>
          <div className={classes.account_icon_head}>
            <div className={classes.account_para1}>DA</div>
          </div>
        </button>
        {showCard && (
          <Card className={classes.account_container}>
            <div className={classes.accountsection}>
              <ul className={classes.unordered_list}>
                <NavLink to="/"><li className={classes.list}>
                  <div className={classes.account_icon}>
                    <div className={classes.account_para}>DA</div>
                  </div>
                  <div className={classes.user}>
                    Deepa Arya
                    <div className={classes.user_email}>
                      deepaaryassccgl.pinnacle.com
                    </div>
                  </div>
                </li></NavLink>
              </ul>
            </div>
            <hr />
            <ul className={classes.unordered_list1}>
              <NavLink to="/">
                <li className={classes.list1}>My learning</li>
              </NavLink>
              <NavLink to="/my-cart">
                <li className={classes.list1}>My Cart</li>
              </NavLink>
              <NavLink to="/wishlist">
                <li className={classes.list1}>Wishlist</li>
              </NavLink>
            </ul>
            <hr />
            <ul className={classes.unordered_list2}>
              <NavLink to="/notification">
                <li className={classes.list2}>Notification</li>
              </NavLink>
              <NavLink to="/messages">
                <li className={classes.list2}>Messages</li>
              </NavLink>
            </ul>
            <hr />
            <ul className={classes.unordered_list3}>
              <NavLink to="/account-settings">
                <li className={classes.list3}>Account settings</li>
              </NavLink>
              <NavLink to="/payment-methods">
                <li className={classes.list3}>Payment methods</li>
              </NavLink>
              <NavLink to="/subscription">
                <li className={classes.list3}>Subscriptions</li>
              </NavLink>
              <NavLink to="/pinnacle-credits">
                <li className={classes.list3}>Pinnacle Credits</li>
              </NavLink>
              <NavLink to="/purchase-history">
                <li className={classes.list3}>Purchase History</li>
              </NavLink>
            </ul>
            <hr />
            {/* <NavLink to="language"> */}
            <div className={classes.lang} onClick={handleLanguage}>
              <span>Language</span>
              <span className={classes.lang_name}>English</span>
              <div className={classes.lang_icon}>
                <BsGlobe size={18} />
              </div>
            </div>
            {/* </NavLink> */}
            <hr />
            <ul className={classes.unordered_list4}>
              <NavLink to="/public-profile">
                <li className={classes.list4}>Public Profile</li>
              </NavLink>
              <NavLink to="/edit-profile">
                <li className={classes.list4}>Edit Profile</li>
              </NavLink>
            </ul>
            <hr />
            <ul className={classes.unordered_list5}>
              <NavLink to="/account-help">
                <li className={classes.list5}>Help</li>
              </NavLink>
              <NavLink to="/logout">
                <li className={classes.list5}>Log out</li>
              </NavLink>
            </ul>
          </Card>
        )}
      </div>
    </>
  )
}

export default Account
