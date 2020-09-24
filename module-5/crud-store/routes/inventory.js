const express = require("express")
const inventoryRouter = express.Router()
const Item = require("../models/inventory.js")

//get all route
inventoryRouter.get("/", (req,res,next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//post
inventoryRouter.post("/", (req,res,next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedItem)
    })
})

inventoryRouter.delete("/:itemId", (req, res, next) => {
    Item.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // return res.status(200).send(deletedItem)
        return res.status(200).send(`deleted ${deletedItem.name} from the database`)
    })
})

module.exports = inventoryRouter
