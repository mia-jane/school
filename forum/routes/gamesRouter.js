const express = require("express")
const gamesRouter = express.Router()
const Comment = require("../models/comments")

//get all route
gamesRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

gamesRouter.post("/", (req, res, next) => {
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newComment)
    })
})

// const comments = ["cat", "dog", "duck"]
// gamesRouter.get("/", (req,res) => {
//     res.send(comments)
// })

module.exports = gamesRouter