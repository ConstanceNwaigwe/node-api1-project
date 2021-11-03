// BUILD YOUR SERVER HERE
const express = require('express');
const server = express();
const User = require('./users/model');

server.use(express.json());

server.post('/api/users', (req,res) => {
    const user = req.body;
    if(!user.name || user.bio){
        res.status(400).json({ 
            message: "Please provide name and bio for the user" });
    }
    User.insert(user)
    .then(newuser => {
        res.status(201).json(newuser)
    })
    .catch(err => {
        res.status(500).json({
            message: "The users information could not be retrieved"
        });
    })
})

server.get("/api/users", (req,res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
            message: "The users information could not be retrieved"
        });
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
server.delete("/api/users/:id", async (req,res) => {
    try{
        const selectedUser = await User.findById(req.params.id);
        if(!selectedUser){
            res.status(404).json({ 
                message: "The user with the specified ID does not exist" })
        } else{
            const deletedUser = await remove(selectedUser.id);
            res.status(200).json(deletedUser);
        }
     } catch (err) {
        res.status(500).json({
            message: "The user could not be removed"
        })}
})
server.put("/api/users/:id", async (req,res) => {
    try{

    } catch (err) {
        res.status(500).json({
            message: "The user information could not be modified"
        })}
})
/*server.use('*', (req,res) => {
    res.status(404).json({
        message: 'nope'
    })
})*/

module.exports = server; // EXPORT YOUR SERVER instead of {}
