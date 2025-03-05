// Create web server using express
// Create a comments array to store comments
// Create a route to get all comments
// Create a route to add a comment
// Create a route to delete a comment
// Create a route to edit a comment
// Create a route to get a single comment by its id

// Import express module
const express = require('express');
const app = express();

// Create a comments array to store comments
const comments = [
    { id: 1, author: 'John', comment: 'Hello' },
    { id: 2, author: 'Doe', comment: 'World' }
];

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) {
        res.status(404).send('Comment not found');
    } else {
        comments.splice(index, 1);
        res.status(204).send();
    }
});

// Create a route to edit a comment
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) {
        res.status(404).send('Comment not found');
    } else {
        const comment = req.body;
        comments[index] = comment;
        res.json(comment);
    }
});

// Create a route to get a single comment by its id
app.get('/comments/:id', (req, res