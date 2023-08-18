import React from "react"
import Card from "../Card/Card"
import styles from "./SideDots.module.css"
import Share from "./Share"
import CreateNewList from "./CreateNewList"
import Favorite from "./Favorite"
import Archieve from "./Archieve"
import { BsThreeDotsVertical } from "react-icons/bs"

function SideDots({ isOpen }) {
  const [selectedOption, setSelectedOption] = React.useState(null)

  const handleItemClick = (option) => {
    setSelectedOption(option)
  }

  const renderComponent = () => {
    switch (selectedOption) {
      case "Item 1":
        return <Share />
      case "Item 2":
        return <CreateNewList />
      case "Item 3":
        return <Favorite />
      case "Item 4":
        return <Archieve />
      default:
        return null
    }
  }

  return (
    <>
      {isOpen && (
        <Card className={styles.dropdownCard}>
          <ul className={styles.itemList}>
            <li onClick={() => handleItemClick("Item 1")}>Item 1</li>
            <li onClick={() => handleItemClick("Item 2")}>Item 2</li>
            <li onClick={() => handleItemClick("Item 3")}>Item 3</li>
            <li onClick={() => handleItemClick("Item 4")}>Item 4</li>
          </ul>
        </Card>
      )}
      {renderComponent()}
    </>
  )
}

export default SideDots
