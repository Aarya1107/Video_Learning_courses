import React, { useState } from "react"
import Header from "./components/VideoHeader/Header Main/HeaderMain"
import MyLearning from "./components/MyLearningPage/MyLearning"
import FilterComponents from "./components/BodyContent/FilteringSection/FilterComponent"
import MainContent from "./components/BodyContent/Main Content/MainContent"
import Footer from "./components/Footer/Footer"
import styles from "./components/MyLearningPage/MyLearning.module.css"
import Wishlist from "./components/VideoHeader/Wishlist/Wishlist"
import MyList from "./components/MyLearningPage/MyList"
import Archieve from "./components/BodyContent/Three Dots/Archieve"
import LearningTools from "./components/MyLearningPage/LearningTools"

function MyLearningMain() {
  const [activeComponent, setActiveComponent] = useState("allCourses")

  const wishlistHandler = () => {
    setActiveComponent("wishlist")
  }

  const contentHandler = () => {
    setActiveComponent("allCourses")
  }

  return (
    <>
      <Header />
      <Mylearning setActiveComponent={setActiveComponent} />

      {activeComponent === "allCourses" && (
        <>
          <FilterComponents />
          <MainContent />
        </>
      )}
      {activeComponent === "mylist" && <MyList />}
      {activeComponent === "wishlist" && <Wishlist />}
      {activeComponent === "archieve" && <Archieve />}
      {activeComponent === "learningTools" && <LearningTools />}

      <Footer />
    </>
  )
}

function Mylearning({ setActiveComponent }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Learning</h1>
      <nav className={styles.navbar}>
        <ul className={styles.unorderedlist}>
          <li className={styles.list11}>
            <button
              onClick={() => setActiveComponent("allCourses")}
              className={styles.heading2}
            >
              All Courses
            </button>
          </li>
          <li className={styles.list11}>
            <button
              onClick={() => setActiveComponent("mylist")}
              className={styles.heading2}
            >
              Mylist
            </button>
          </li>
          <li className={styles.list11}>
            <button
              onClick={() => setActiveComponent("wishlist")}
              className={styles.heading2}
            >
              Wishlist
            </button>
          </li>
          <li className={styles.list11}>
            <button
              onClick={() => setActiveComponent("archieve")}
              className={styles.heading2}
            >
              Archieved
            </button>
          </li>
          <li className={styles.list11}>
            <button
              onClick={() => setActiveComponent("learningTools")}
              className={styles.heading2}
            >
              Learning Tools
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MyLearningMain
