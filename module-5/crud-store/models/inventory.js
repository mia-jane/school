const mongoose = require("mongoose")
const Schema = mongoose.Schema

//product blueprint
const inventorySchema = new Schema({
    name: {
        type: String,
        required:true
    },
    isInStock:{ 
        type: Boolean,
        required: true
    },
    numberInStock: Number
})

module.exports = mongoose.model("Item", inventorySchema)