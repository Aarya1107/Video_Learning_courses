import React from "react"
import VideoPlayer from "./components/VideoPlayerPage/VideoPlayer/Video/VideoPlayer"
import Header from "./components/VideoPlayerPage/VideoPageHeaderComponents/VideoHeader/VideoHeader"
import Footer from "./components/Footer/Footer"
import styles from "./VideoCoursesMain.module.css" // Import CSS module

function VideoCoursesMain() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <VideoPlayer />
      </div>
    </div>
  )
}

export default VideoCoursesMain
