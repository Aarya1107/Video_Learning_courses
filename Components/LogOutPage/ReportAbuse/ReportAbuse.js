import React, { useState, useEffect } from "react";
import classes from "./ReportAbuse.module.css";
import {RxCross2} from 'react-icons/rx'

export default function ReportAbuse() {

    const [isVisible, setIsVisible] = useState(true);

    const handleHide = () => {
      setIsVisible(false);
    };
    
  
    useEffect(() => {
      const isComponentVisible = localStorage.getItem("componentVisible");
  
      if (isComponentVisible !== null) {
        setIsVisible(JSON.parse(isComponentVisible));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("componentVisible", JSON.stringify(isVisible));
    }, [isVisible]);
  
    if (!isVisible) {
      return null;
    }
  
  return (
    <div className={classes["ReportAbuse-fullPage"]}>
      <div className={classes["ReportAbuse-heading"]}>Report abuse
      <button className={classes["ReportAbuse-crossBtn"]} onClick={handleHide}>
        <RxCross2 size={20}/>
        </button></div>
      <div className={classes["ReportAbuse-Content"]}>
        Flagged content is reviewed by Pinnacle staff to determine whether it
        violates Terms of Service or Community Guidelines. If you have a
        question or technical issue, please contact
        <a href="/"> our Support team here</a>.
      </div>
      <div className={classes["ReportAbuse-sub-heading"]}>Issue type</div>
      <div className={classes["ReportAbuse-select-option-section"]}>
        <select defaultValue="select an issue" className={classes["ReportAbuse-select"]}>
          <option>select an issue</option>
          <option>Inappropriate Course Content</option>
          <option>Inappropriate Behavior</option>
          <option>Pinnacle Policy violation</option>
          <option>Spammy Content</option>
          <option>Other</option>
        </select>
      </div>
      <div className={classes["ReportAbuse-sub-heading"]}>Issue details</div>
      <div className={classes["ReportAbuse-Inputbox-section"]}>
        <input type="text" className={classes["ReportAbuse-Inputbox"]} ></input>
      </div>
      <div className={classes["ReportAbuse-buttons"]}>
        <button className={classes["cancel-button"]}>Cancel</button>
        <button className={classes["submit-button"]}>Submit</button>
      </div>
    </div>
  );
}
