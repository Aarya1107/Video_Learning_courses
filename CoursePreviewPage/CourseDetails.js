import React from "react";
import styles from "./CDetails.module.css";
import courseDetailsData from "./courseDetailsData.json";
import Details from "./Details";
import Requirements from "./Requirements";
import ContentDetails from "./ContentDetails";
import Description from "./Description";
import ShowMoreButton from "./ShowMoreButton";
import Cart from "./Cart";
import Accordion from "../../Accordion/Accordion";
import FeaturedReview from "./MoreComponents/FeaturedReview";
import FacultyComponent from "./MoreComponents/FacultyComponent";
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
  return (
    <div className={styles["full-Course-Details"]}>
      {courseDetailsData.map((data) => (
        <>
          <div className={styles["Details"]}>
            <Details />
          </div>
          <div className={styles["subscription-cart"]}>
            <Cart />
          </div>
          <div className={styles["another-Details-div"]}>
            <div className={styles["course-content-Details"]}>
              <ContentDetails />
            </div>
            <div className={styles["Course-content-Accordion-div"]}>
              <div className={styles["Accordion-heading-div"]}>
                Course content
              </div>
              <div className={styles["Accordion-bellowHeading-div"]}>
                <div>46 Sections</div>
                <div>464 lectures </div>
                <div>66 h 7 m total length</div>
              </div>
              <div>
                <Accordion />
              </div>
            </div>
            <div className={styles["requirements-div"]}>
              <Requirements />
            </div>
            <div className={styles["description-div"]}>
              <Description />
            </div>
            <div>
              <FeaturedReview />
              <FacultyComponent />
            </div>


            <div>
              <ShowMoreButton />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
