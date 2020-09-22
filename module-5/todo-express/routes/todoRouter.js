const { Router } = require("express")
const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
        name: "Rake leaves",
        description: "Rake all the leaves",
        imageUrl: "https://images.unsplash.com/photo-1476458393436-fb857cc4c7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "go to the market",
        description: "buy some treats",
        imageUrl: "https://images.unsplash.com/photo-1476458393436-fb857cc4c7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        completed: false,
        _id: uuidv4()
    }
]

//working get all
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//working get one
todoRouter.get("/:todoId", (req, res) => {
    // console.log(req.params.todoId)
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//working delete
todoRouter.delete("/:todoId", (req, res) => {
    // console.log(req.params.todoId)
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("deleted todo")
})

//working post
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("added new todo")
})

//put working
todoRouter.put("/:todoId", (req, res) => {
    // console.log(req.params.todoId)
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
    console.log("put successful")
})


module.exports = todoRouter