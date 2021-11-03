const server = require('./api/server');

const port = 5000;

// START YOUR SERVER HERE
/*server.post('/api/users', (req, res) => {
    const id = req.params.id;
    res.status(201).json({newUser: req.body, id: id});
    res.status(500).json({ message: "There was an error while saving the user to the database" });
    res.status(400).json({ message: "Please provide name and bio for the user" })
});*/

server.listen(port, (() => {
    console.log("list");
}))
