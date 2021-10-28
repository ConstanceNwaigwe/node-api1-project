const server = require('./api/server');

const port = 5000;

// START YOUR SERVER HERE
server.post('/api/users', (req, res) => {
    res.status(400).json({ message: "Please provide name and bio for the user" });
})
