const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use("/", express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/wardrobe",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => {
        console.log("connected to the database")
    }
)