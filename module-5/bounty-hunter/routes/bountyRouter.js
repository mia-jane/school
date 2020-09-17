const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstName: "Darth", lastName:"Vader", living: true, bountyAmount: 10000, type: "Sith", _id:uuidv4()}
]

bountyRouter.get("/", (req,res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req,res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send("successfully added a new bounty")
})

bountyRouter.delete("/:bountyId", (req, res) => {
    // console.log(req.params.bountyId)
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("deleted bounty")
})

bountyRouter.put(":/bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    
})

module.exports = bountyRouter