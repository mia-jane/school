const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pieceSchema = new Schema({
    name: String,
    imgUrl: {
        type: String,
        required: true
    },
    brand: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Piece", pieceSchema)