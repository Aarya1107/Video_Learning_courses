import React from "react"
import classes from "./Language.module.css"
import Card from "../../../BodyContent/Card/Card"

function Language() {
  return (
    <Card className={classes.lang_container}>
      <ul className={classes.unordered_list}>
        <li className={classes.list_item1}>Hinglish</li>
        <li className={classes.list_item2}>English</li>
        <li className={classes.list_item3}>Hindi</li>
      </ul>
    </Card>
  )
}

export default Language
