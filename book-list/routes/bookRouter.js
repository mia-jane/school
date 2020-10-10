const express = require("express")
const bookRouter = express.Router()
const Book = require("../models/book")

bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(books)
    })
})

bookRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

bookRouter.put("/", (res, req, next ) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId },
        req.body,
        {new: true},
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

bookRouter.delete("/", (req, res, next) => {
    Book.findOneAndDelete({_id: req.params.bookId}, (err, deletedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedBook)
    })
})

module.exports = bookRouter