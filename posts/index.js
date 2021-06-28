const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const posts = {};


// This is a test
app.get("/posts", (req, res) => {
    res.send(posts);
});


// Body should have a title for the post
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log("Listening on 4000");
})