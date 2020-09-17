const express = require("express")
const app = express()
//app is the server variable

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Working!")
})