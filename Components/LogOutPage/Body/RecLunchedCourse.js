import React, { useRef, useEffect, useState } from "react"
import commentsData from "./comments.json"
import styles from "./RecLunchedCourse.module.css"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import Star from "../Star/Star"
import newTag from "./new-tag.svg"
import { useNavigate } from "react-router-dom"

export default function RecLunchedCourse() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [comments, setComments] = useState([])
  const scrollRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  const handleMouseOver = (id) => {
    setHoveredId(id)
  }

  const handleMouseOut = () => {
    setHoveredId(null)
  }

  useEffect(() => {
    setComments(commentsData)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={styles["recently-launched-course-fullpage"]}>
      <button onClick={scrollLeft} className={styles["sliderButton-left"]}>
        <AiFillLeftCircle size={30} />
      </button>
      <div className={styles.Course_Heading}>Recently launched courses </div>
      <div className={styles["scroll-container"]} ref={scrollRef}>
        <div className={styles["card-wrapper"]}>
          {comments.map((data) => (
            <div key={data.id} className={styles["card"]}>
              <div className={styles["recLunchedPage"]}>
                <div className={styles["Image-section"]}>
                  <div className={styles["Image-new"]}>
                    <img src={newTag} alt="" width="37.02" height="36.73"></img>
                  </div>
                  <div className={styles["Image-01"]}>
                    <img src={data.image} alt="" width="145" height="145"></img>
                  </div>
                  <div className={styles["Image-02"]}>
                    <img
                      src={data.imageUrl}
                      alt=""
                      width="145"
                      height="145"
                    ></img>
                  </div>
                </div>
                <div
                  className={styles["description-section"]}
                  onClick={() => navigate("/page02")}
                >
                  <div className={styles["title"]}>{data.title}</div>
                  <div className={styles["teacher"]}>
                    Mr./Ms. {data.teacher}
                  </div>
                  {/* <div className={styles["rating"]}>{data.rating} Rated</div> */}
                  <div className={styles["try-for-free"]}>
                    <div
                      className={styles["Rating"]}
                      onMouseOver={() => handleMouseOver(data.id)}
                      onMouseOut={handleMouseOut}
                    >
                      <div className={styles["Star-Rating"]}>
                        {" "}
                        4.8
                        <div className={styles["For-Star-div"]}>
                          {" "}
                          <AiFillStar
                            className={styles["Star-Rating-1"]}
                            color="white"
                            fontSize="1em"
                          />
                        </div>
                      </div>
                      <div className={styles["Total-Rating"]}>(128)</div>
                    </div>
                  </div>
                  <div className={styles["StarRating"]}>
                    {hoveredId === data.id && <Star />}
                  </div>
                  <div className={styles["price-fprice-div"]}>
                    <div>&#8377;{data.price}</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <s>&#8377;{data.fprice}</s>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className={styles["sliderButton-right"]}>
        <AiFillRightCircle size={30} />
      </button>
    </div>
  )
}
