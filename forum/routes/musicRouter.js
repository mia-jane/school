const express = require("express")
const musicRouter = express.Router()
const MusicComment = require("../models/musicComments")

//get all route
musicRouter.get("/", (req, res, next) => {
    MusicComment.find((err, musicComments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(musicComments)
    })
})

musicRouter.post("/", (req, res, next) => {
    const newMusicComment = new MusicComment(req.body)
    newMusicComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})


module.exports = musicRouter