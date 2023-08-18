import React, { useState, useEffect } from "react"
import classes from "./VideoHeader.module.css"
import { AiFillStar } from "react-icons/ai"
import { IoIosShareAlt } from "react-icons/io"
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsThreeDotsVertical } from "react-icons/bs"
import VerticaldotsOptions from "../VerticaldotsOptions"
import Share from "../VideoShare/Sharing"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [isVerticalOptions, setVerticalOptions] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [headerTitle, setHeaderTitle] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/path/to/headerTitle.json")
      .then((response) => response.json())
      .then((data) => {
        setHeaderTitle(data.title)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching header title:", error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSharing = () => {
    setIsSharing(!isSharing)
  }

  const handleCloseSharing = () => {
    setIsSharing(false)
  }

  const handlerVerticalDots = () => {
    setVerticalOptions(!isVerticalOptions)
  }

  const handlerCloseVerticalDots = () => {
    setVerticalOptions(false)
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src="/images/Pinnacle_Logo.svg" width={100} alt="Logo" />
        </NavLink>
      </div>
      <div className={classes.title}>
        SSC Maths 6800 TCS MCQ chapter wise book course
      </div>
      <div className={classes.options}>
        <div className={classes.option}>
          <span>
            <AiFillStar size={20} />
          </span>
          <span>Leave a rating</span>
        </div>
        <div className={classes.dropdown}>
          <span>Your Progress</span>
          <RiArrowDropDownLine size={25} />
          <div className={classes.progressBar}></div>
        </div>
        <div className={classes.shareContainer}>
          <button className={classes.shareButton} onClick={handleSharing}>
            Share
            <IoIosShareAlt
              className={classes.shareIcon}
              size={23}
              onClick={handleSharing}
            />
          </button>
        </div>
        <button className={classes.Vdots} onClick={handlerVerticalDots}>
          <BsThreeDotsVertical className={classes.Vdotsicon} size={25} />
        </button>
      </div>
      {isVerticalOptions && (
        <VerticaldotsOptions onClose={handlerCloseVerticalDots} />
      )}
      {isSharing && <Share onClose={handleCloseSharing} />}
    </header>
  )
}

export default Header
