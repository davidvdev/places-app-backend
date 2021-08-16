require("dotenv").config()
const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI

const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(MONGODB_URI, config)

mongoose.connection
    .on("open", () => console.log("🤠 Mongo connection is open 🤠"))
    .on("close", () => console.log("💤 Mongo connection is closed 💤"))
    .on("error", (error) => console.log("‼‼‼ Mongo connection error: ", error))

module.export = mongoose;