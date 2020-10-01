const express = require("express")
const gamesRouter = express.Router()
const GameComment = require("../models/gameComments")

//get all route
gamesRouter.get("/", (req, res, next) => {
    GameComment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

gamesRouter.post("/", (req, res, next) => {
    const newGameComment = new GameComment(req.body)
    newGameComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

module.exports = gamesRouter