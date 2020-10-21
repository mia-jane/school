const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: String,
    genre: String,
    summary: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)