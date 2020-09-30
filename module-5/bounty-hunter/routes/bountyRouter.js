const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")


bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`deleted ${deletedBounty}`)
    })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        })
})


module.exports = bountyRouter



//pre-mongoose
//get works
// bountyRouter.get("/", (req,res) => {
//     res.send(bounties)
// })


// //post works
// bountyRouter.post("/", (req,res) => {
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     // res.send("successfully added a new bounty")
//     res.send(newBounty)
//     //this will be the response.data in axios
// })


// bountyRouter.delete("/:bountyId", (req, res) => {
//     // console.log(req.params.bountyId)
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send("deleted bounty")
// })

// //put router needs 2 things: the id and the request body (new object to update the existing obj with)
// bountyRouter.put("/:bountyId", (req,res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     console.log(bountyIndex)
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
//     console.log(updatedBounty)
//     res.send(updatedBounty)
// })

