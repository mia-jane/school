const express = require("express")
const app = express()


app.use(express.json())

app.use("/inventory", require("./routes/thingsRouter.js"))

app.listen(9000, () => {
    console.log("working!")
})