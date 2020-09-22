const express = require("express")
const app = express()
const morgan = require("morgan")
//app is the server variable

app.use(express.json())
app.use(morgan("dev")) //logs requests to the console

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Working!")
})