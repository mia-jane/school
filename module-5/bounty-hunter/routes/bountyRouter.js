const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstName: "Darth", lastName:"Vader", living: true, bountyAmount: 10000, type: "Sith", _id:uuidv4()}
]

//get works
bountyRouter.get("/", (req,res) => {
    res.send(bounties)
})


//post works
bountyRouter.post("/", (req,res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    // res.send("successfully added a new bounty")
    res.send(newBounty)
    //this will be the response.data in axios
})


bountyRouter.delete("/:bountyId", (req, res) => {
    // console.log(req.params.bountyId)
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("deleted bounty")
})

//put router needs 2 things: the id and the request body (new object to update the existing obj with)
bountyRouter.put("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    console.log(bountyIndex)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    console.log(updatedBounty)
    res.send(updatedBounty)
})

module.exports = bountyRouter