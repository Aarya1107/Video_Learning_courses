import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../Searchbar/SearchBar"
import Cart from "../Cart/Cart"
import Account from "../Account/Account"
import Notification from "../Notification/Notification"
import Wishlist from "../Wishlist/Wishlist"
import AllApps from "../All Apps/AllApps"
import styles from "./HeaderMain.module.css"
import MyLearningHover from "../MyLearningHover/MyLearningHover"
import Categories from "../Categories/Categories"

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/Pinnacle logo colored.svg" alt="Logo" />
      </div>

      <nav className={styles.nav1}>
        <ul className={styles.unorderedlist}>
          <Categories />
          <li className={styles.list12}>
            <SearchBar onSearch={handleSearch} />
          </li>
          <li className={styles.playstorelist}>
            <NavLink to="https://play.google.com/store/search?q=pinnacle&c=apps&hl=en-IN">
              <div className={styles.playStore_icon}>
                <img
                  src="/images/playstore.png"
                  alt=""
                  width="30px"
                  height="30px"
                  className={styles.playStore_image}
                />
                <div className={styles.Playstore_description}>
                  Download Mobile app
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.unorderedlist}>
          <li className={styles.list12}>
            <MyLearningHover />
          </li>

          <li className={styles.list12}>
            <Wishlist />
          </li>

          <li className={styles.list12}>
            <Cart />
          </li>
          <li className={styles.list12}>
            <AllApps />
          </li>

          <li className={styles.list12}>
            <Notification />
          </li>
          <li className={styles.list12}>
            <Account />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
