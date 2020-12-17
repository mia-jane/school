const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue")

//get issue posts from all
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//get user's posts
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(issues)
    })
})

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})



//like a post
issueRouter.put("/upvote/:issueId", (req, res, next) => {
    // find the issue
    Issue.findById(req.params.issueId, (err, issue) =>{
        // append the  upvote to the array
        const exists = Array.from(issue.upvotes).find(upvote => String(upvote.user) === req.user._id);
        const downvoteExist = Array.from(issue.downvotes).find(downvote => String(downvote.user === req.user._id))
        if(!exists && !downvoteExist) {
            issue.upvotes.push({user: req.user});
        // save the issue
            issue.save(err => {
             if(err){
                    res.status(500);
                    return next(err);
             }
               return res.status(201).send(issue);
            })
        //  send it back to the client

        } else if(downvoteExist){
            issue.downvotes.id(downvoteExist._id).remove();
            issue.upvotes.push({user: req.user});
            issue.save(err => {
                if(err){
                       res.status(500);
                       return next(err);
                }
                  return res.status(201).send(issue);
            })
        }
        else{
            return res.status(201).send(issue)    
        }
    })
})

//downvote
issueRouter.put("/downvote/:issueId", (req, res, next) => {
    // find the issue
    Issue.findById(req.params.issueId, (err, issue) =>{
        // append the  upvote to the array
        const exists = Array.from(issue.downvotes).find(downvote => String(downvote.user) === req.user._id);
        const upvoteExists = Array.from(issue.upvotes).find(upvote => String(upvote.user) === req.user._id)
        if(!exists && !upvoteExists) {
            issue.downvotes.push({user: req.user});
        // save the issue
            issue.save(err => {
             if(err){
                    res.status(500);
                    return next(err);
             }
               return res.status(201).send(issue);
            })
        } else if(upvoteExists){
            issue.upvotes.id(upvoteExists._id).remove()
            issue.downvotes.push({user: req.user})
            issue.save(err => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(issue)
            })
        } else {
            return res.status(201).send(issue)    
        }
    })
})



//undo upvote
issueRouter.put("/undo-upvote/:issueId/:upvoteId", (req, res, next) => {
    // find the issue
    Issue.findById(req.params.issueId, (err, issue) =>{
        const exists = Array.from(issue.upvotes).find(upvote => String(upvote.user) === req.user._id);
        if(exists) {
            issue.upvotes.id(req.params.upvoteId).remove();
        // save the issue
            issue.save(err => {
             if(err){
                    res.status(500);
                    return next(err);
             }
               return res.status(201).send(issue);
            })
        //  send it back to the client
        } else {
            return res.status(201).send(issue)    
        }
    })
})

//remove a downvote
issueRouter.put("/undo-downvote/:issueId/:downvoteId", (req, res, next) => {
    // find the issue
    Issue.findById(req.params.issueId, (err, issue) =>{
        const exists = Array.from(issue.downvotes).find(downvote => String(downvote.user) === req.user._id);
        if(exists) {
            issue.downvotes.id(req.params.downvoteId).remove();
        // save the issue
            issue.save(err => {
             if(err){
                    res.status(500);
                    return next(err);
             }
               return res.status(201).send(issue);
            })
        //  send it back to the client
        } else {
            return res.status(201).send(issue)    
        }
    })
})

//delete issue post
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.user._id}, (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("deleted post")
        })
})

//edit issue post
issueRouter.put("/:issueId", (req,res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})


module.exports = issueRouter