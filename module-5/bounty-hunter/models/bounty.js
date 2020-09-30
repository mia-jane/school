const mongoose = require("mongoose")
const Schema = mongoose.Schema

//blueprint
const bountySchema = new Schema({
    firstName: String,
    lastName: {
        type: String,
        required: true
    },
    living: Boolean,
    bountyAmount: {
        type: Number,
        required: true
    },
    type: String
})

module.exports = mongoose.model("Bounty", bountySchema)