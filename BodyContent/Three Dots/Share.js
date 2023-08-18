import React, { useState } from "react"
import styles from "./Share.module.css"
import data from "./shareData.json"

import { SiGooglemessages } from "react-icons/si"
import { BsTelegram, BsWhatsapp, BsFacebook } from "react-icons/bs"

const Share = () => {
  const [inputValue, setInputValue] = useState(data.inputValue) // Function to handle copying the input value

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue)
  }

  const handleShareMessage = () => {
    // Code to share on Message
    console.log("Sharing on Message:", inputValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Share This Course</div>{" "}
      <div className={styles["input-copy-container"]}>
        {" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
        />{" "}
        <button onClick={handleCopy} className={styles.copyButton}>
          Copy{" "}
        </button>{" "}
      </div>{" "}
      <div className={styles.shareButtons}>
        {" "}
        <button onClick={handleShareMessage} className={styles.shareButton}>
          <SiGooglemessages />{" "}
        </button>{" "}
        <a
          href={`https://t.me/share?url=${inputValue}`}
          target="blank"
          className={styles.shareButton}
        >
          <BsTelegram />{" "}
        </a>{" "}
        <a
          href={`https://api.whatsapp.com/send?text=${inputValue}`}
          target="blank"
          className={styles.shareButton}
        >
          <BsWhatsapp />{" "}
        </a>{" "}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${inputValue}`}
          target="blank"
          className={styles.shareButton}
        >
          <BsFacebook />{" "}
        </a>{" "}
      </div>{" "}
    </div>
  )
}

export default Share
