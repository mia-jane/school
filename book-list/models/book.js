const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    imageUrl: String,
    genre: String,
    summary: String
})

module.exports = mongoose.model("Book", bookSchema)