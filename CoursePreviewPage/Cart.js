import React, { useState, useEffect } from "react";
import data from "./data.json";
import styles from "./Cart.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ApplyCoupon from "./ApplyCoupon";
import Share from "./ShareComponent/Share";
import { Link } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [selectedMonths, setSelectedMonths] = useState(1);
  const [showCoupon, setShowCoupon] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const { image1, image2, heading, description, subscriptionPrice } = data;

  const handleShare = () => {
    setIsShare(!isShare);
  };
  const handleMonthsChange = (event) => {
    setSelectedMonths(Number(event.target.value));
  };
  const ApplyCouponHandler = () => {
    setShowCoupon(!showCoupon);
  };

  const getPrice = () => {
    switch (selectedMonths) {
      case 6:
        return 850;
      case 12:
        return 1250;
      case 18:
        return 1500;
      case 25:
        return 2000;
      default:
        return 500;
    }
  };

  return (
    <div className={styles["above-cart-fullpage"]}>
      <div className={styles["cart-fullpage"]}>
        <div className={styles["image-section"]}>
          <img
            src={image1}
            alt="Course1"
            className={styles["image1"]}
            id="cart-image1"
          />
          <img
            src={image2}
            alt="Course2"
            className={styles["image2"]}
            id="cart-image2"
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles["video-preview-div"]}>
            <div className={styles["video-icon"]}>
              <AiOutlinePlayCircle size={40} />
            </div>
            <div className={styles["video-icon-p-div"]}>
              <p>Preview this course</p>
            </div>
          </div>

          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.course}>
            {description}
            <Link to="/personalPlane">Learn More</Link>
          </p>
          <button className={styles["Start-Subscription-btn"]} onClick={() => navigate("/checkout")} >
            Start Subscription
          </button>
          <p className={styles["Subscription-para"]}>
            Starting at ₹ {subscriptionPrice} per month Cancel anytime
          </p>
          <div className={styles["range-slider-container"]}>
            <input
              type="range"
              min="0"
              max="23"
              step="6"
              value={selectedMonths}
              onChange={handleMonthsChange}
              className={styles["range-slider"]}
            />
            {/* <div
              className={styles["triangle-pointer"]}
              style={{ left: `${(selectedMonths / 23) * 100}%` }}
            ></div> */}
          </div>
          <div className={styles["Months-price-section"]}>
            <p className={styles.months}>Months: {selectedMonths}</p>
            <p className={styles.price}>Price: ₹{getPrice()}</p>
          </div>

          <button className={styles["Buy-this-course"]}  onClick={() => navigate("/checkout")}  >Buy this course</button>


          <div className={styles["buttons-section"]}>
       
            <button className={styles["individual-btn"]} onClick={handleShare} >
              Share
            </button>

            <button
              className={styles["individual-btn"]}
              onClick={() => navigate("/gitACourse")}
            >
              Gift this course
            </button>
            <button
              className={styles["individual-btn"]}
              onClick={ApplyCouponHandler}
            >
              Apply coupon
            </button> 
          </div>

          <div>{showCoupon && <ApplyCoupon/>}</div>
          {/* <div className={styles["Share-div"]}>{showShare && <Share />}</div> */}
        </div>
      </div>
      {isShare && (
        <Share />
      )}
    </div>
  );
};

export default Cart;
