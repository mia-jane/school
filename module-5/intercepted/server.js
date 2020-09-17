const express = require("express")
const app = express()

app.use("/", express.json())


app.use("/", require("./middleware.js"))

// app.use("/", (req, res, next) => {
//     console.log("middleware executed")
//     req.body = {species : "dog"}
//     next()
// })

app.get("/", (req,res, next) => {
    console.log("received")
    const details = {firstname: "Nora", lastname: "Ryan"}
    const everything = Object.assign(req.body , details)
    res.send(everything)
})

app.listen(8000, () => {
    console.log("server is running")
})