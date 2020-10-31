const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: [new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true
        }
    })],
    downvotes: [new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true
        }
    })],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)