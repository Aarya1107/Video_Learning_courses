const express = require("express")
const multer = require("multer")
const aws = require("aws-sdk")
const cors = require("cors")
const uuid = require("uuid")
const mongoose = require("mongoose")
const menuRoutes = require("./routes/menuRoutes")

const app = express()
const port = 5000

// Multer setup for handling file uploads
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// AWS S3 setup
const s3 = new aws.S3({
  accessKeyId: "AKIAUCB5IL64LCDJOUFF",
  secretAccessKey: "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",
  region: "ap-south-1",
})

// MongoDB setup
mongoose.connect(
  "mongodb+srv://Aryan:Deep1177@videos.ffkkrtk.mongodb.net/Video_Courses?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const videoSchema = new mongoose.Schema(
  {
    title: String,
    videoUrl: String,
    mimeType: String,
  },
  { timestamps: true }
)

const Video = mongoose.model("Video", videoSchema)

// Enable CORS for all routes
app.use(cors())
app.use("/api", menuRoutes)

// Express route for handling video uploads
app.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const { title } = req.body
    const videoFile = req.file

    // Generate a unique key for the S3 object
    const key = `videos/${videoFile.originalname}-${uuid.v4()}.mp4`

    // Set up the parameters for S3 upload
    const params = {
      Bucket: "videocoursespinnacle",
      Key: key,
      Body: videoFile.buffer,
      ContentType: videoFile.mimetype,
    }

    // Log the mime type to the console
    console.log("Mime Type:", videoFile.mimetype)

    // Upload the video to S3
    s3.upload(params, async (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).json({
          error: "Error uploading video to S3",
          details: err.message,
        })
      }

      // Store data in MongoDB
      const newVideo = new Video({
        title: title,
        videoUrl: data.Location,
        mimeType: videoFile.mimetype,
      })

      newVideo.save()

      res.json({
        message: "Video uploaded successfully",
        videoUrl: data.Location,
      })
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    })
  }
})

app.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find()
    res.json(videos)
  } catch (error) {
    console.error("Error fetching videos:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
