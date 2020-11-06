const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

//signup
authRouter.post("/signup", (req, res, next) => {
    //see if user exists
    User.findOne( {username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)  //403 means forbidden
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //create token (token = payload + signature)
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            //send object back bc want to send both token and user
            return res.status(201).send({token, user: savedUser})
        })
    })
})


//login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            return next(new Error("username or password are incorrect"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("username or password are incorrect"))
        }
        const token= jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({token, user})
    })
})

module.exports = authRouter