import React, { useState, useEffect, useRef } from "react"
import classes from "./MainContent.module.css"
import { PiPlayFill } from "react-icons/pi"
import { BsThreeDotsVertical } from "react-icons/bs"
import data from "../maindata.json"
import Card from "../Card/Card"
import Loading from "../ProgressBar/ProgressBar"
import { Link } from "react-router-dom"
import SideDots from "../Three Dots/SideDots"
import StarRating from "../Rating Component/StarRating"

function MainContent() {
  const [isVerticalOptions, setVerticalOptions] = useState(
    Array(data.length).fill(false)
  )
  const [lastClickedIndex, setLastClickedIndex] = useState(-1)
  const ref = useRef(null)

  const handlePlayClick = (link) => {
    console.log("Opening video link:", link)
  }

  const handleDotClick = (index) => {
    setVerticalOptions((prevOptions) => {
      const newOptions = prevOptions.map((option, i) =>
        i === index ? !option : false
      )
      setLastClickedIndex(index)
      return newOptions
    })
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVerticalOptions(Array(data.length).fill(false))
        setLastClickedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className={classes.card_container}>
        {data.map((item, index) => (
          <Card key={item.id} className={classes.card}>
            <div className={classes.card_img_container}>
              <div className={classes.card_img}>
                <img src={item.image} alt="" width="95" height="95" />
                <img src={item.imageUrl} alt="" width="95" height="95" />
                <div
                  className={classes.play_icon}
                  onClick={() => handlePlayClick(item.link)}
                >
                  <Link to="/mylearning">
                    <PiPlayFill size={30} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.sidedots} ref={ref}>
              <button onClick={() => handleDotClick(index)}>
                <div className={classes.dots}>
                  <BsThreeDotsVertical
                    className={classes.threedots}
                    size={15}
                  />
                </div>
              </button>
              {isVerticalOptions[index] && (
                <SideDots isOpen={lastClickedIndex === index} />
              )}
            </div>

            <div className={classes.heading}>
              <a href="/" className={classes.title}>
                {item.title}
              </a>
              <div className={classes.instructor}>{item.instructor}</div>
            </div>
            <Loading />
          </Card>
        ))}
      </div>
    </>
  )
}

export default MainContent
