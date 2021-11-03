// BUILD YOUR SERVER HERE
const express = require('express');
const server = express();
const User = require('./users/model');
server.get("/api/users", (req,res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
            message: "The users information could not be retrieved"
        })
    })
})
server.get("/api/users/:id", (req,res) => {
    User.findById()
    .then(user => {
        res.json(user)
        if(!user){
            res.status(404).json({ 
                message: "The user with the specified ID does not exist" })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "The user information could not be retrieved"
        })
    })
})
/*server.use('*', (req,res) => {
    res.status(404).json({
        message: 'nope'
    })
})*/

module.exports = server; // EXPORT YOUR SERVER instead of {}
