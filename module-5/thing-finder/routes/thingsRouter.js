const express = require("express")
const thingsRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: "200",
        _id:uuidv4(),
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id:uuidv4(),
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id:uuidv4(),
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id:uuidv4(),
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id:uuidv4(),
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id:uuidv4(),
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id:uuidv4(),
    }
]

//get all
thingsRouter.get("/", (req,res) => {
    res.send(inventoryItems)
})

// get by genre using new endpoint
thingsRouter.get("/type", (req,res) => {
    // console.log(req.query.type)
    const type = req.query.type
    const filteredTypes = inventoryItems.filter(item => item.type === type)
    res.send(filteredTypes)
})

//filter by type using params
// thingsRouter.get("/:type", (req, res) => {
//     const thingType = req.params.type
//     const filteredThings = inventoryItems.filter(item => item.type === thingType)
//     res.send(filteredThings)
// })

thingsRouter.get("/search/price", (req, res) => {
    const price = req.query.price
    console.log(price)
    const filteredPrices = inventoryItems.filter(item => String(item.price) === price)
    res.send(filteredPrices)
})

module.exports = thingsRouter