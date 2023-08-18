import React from "react";
import styles from "./Details.module.css";
import details from "./details.json";
import { MdLanguage, MdOutlineClosedCaptionOff } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import{AiFillStar} from "react-icons/ai"
export default function Details() {
  return (
    <div className={styles["Details-fullpage"]}>
      <div className={styles["heading"]}>
        Maths 6800 TCS MCQ Chapter wise Book Video course{" "}
      </div>
      <div className={styles["description"]}>
        In this course we will cover famous book for Maths in SSC Pinnacle SSC
        maths 6800 TCS MCQ chapter wise in an arranged manner{" "}
      </div>
      <div className={styles["Faculty"]}>Faculty : Ramniwas sir</div>
      <div className={styles["bestSeler-div"]}>
        <div>
          <button className={styles["bestSeler-btn"]}>Best Seller</button>
        </div>
        <div className={styles["rate"]}>
          <AiFillStar className={styles.ratingStar} />
          <AiFillStar className={styles.ratingStar} />
          <AiFillStar className={styles.ratingStar} />
          <AiFillStar className={styles.ratingStar} />
          <BsStarHalf className={styles.ratingStar} />
          &nbsp;&nbsp;232 Rating
        </div>
        <div className={styles["Students"]}>6219 students</div>
      </div>
      <div className={styles["language-caption-div"]}>
        <div className={styles["language-icon"]}>
          {" "}
          <MdLanguage size={30} />
        </div>
        <div>Hinglish</div>
        <div>
          <MdOutlineClosedCaptionOff size={30} />
        </div>
        <div>Hindi, English, Bengali, Telgu, Tamil, 3 more</div>
      </div>
    </div>
  );
}
