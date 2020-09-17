const express = require("express")
const middleware = express.Router()

function middlewareFunction(req, res, next) {
    console.log("middleware executed")
    req.body = {species : "dog"}
    next()
}

module.exports = middleware