const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(morgan("dev"))
app.use("/", express.json())


mongoose.connect("mongodb://localhost:27017/booksdb", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => {
        console.log("connected to the books database")
    }
)

app.use("/books", require("./routes/bookRouter"))

app.use((err, req, res, next) => {
    console.log(err)
        res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("server is running on port 9000")
})
