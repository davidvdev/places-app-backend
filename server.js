require("dotenv").config()
const PORT = process.env.PORT

const express= require("express")
const morgan= require("morgan")
const cors= require("cors")

const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

const placeRouter = require("./controllers/places")
app.get("/", (req,res) => res.send("🤠"))
app.use("/places", placeRouter)

app.listen(PORT, () => console.log(`📡 Listening on port ${PORT}`))