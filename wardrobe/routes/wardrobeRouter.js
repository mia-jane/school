const express = require("express")
const wardrobeRouter = express.Router()
const Piece = require("../models/piece")

wardrobeRouter.get("/", (req, res, next) => {
    Piece.find((err, pieces) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(pieces)
    })
})

wardrobeRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newPiece = new Piece(req.body)
    newPiece.save((err, savedPiece) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPiece)
    })
})

wardrobeRouter.put("/:PieceId", (req, res, next ) => {
    Piece.findOneAndUpdate(
        {_id: req.params.PieceId, user: req.user._id },
        req.body,
        {new: true},
        (err, updatedPiece) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPiece)
        }
    )
})

wardrobeRouter.delete("/:PieceId", (req, res, next) => {
    Piece.findOneAndDelete({_id: req.params.PieceId, user: req.user._id}, (err, deletedPiece) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedPiece)
    })
})

module.exports = wardrobeRouter