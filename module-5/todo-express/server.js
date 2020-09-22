const express = require("express")
const app = express()

app.use(express.json())

app.use("/todos", require("./routes/todoRouter"))

app.listen(7000, () => {
    console.log("server is working!")
})