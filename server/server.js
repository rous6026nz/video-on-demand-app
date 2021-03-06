const express = require('express')
const path = require('path')

const { makeApiCall } = require('./API_helper')

const app = express()
const port = process.env.PORT || 8080

// API URL
const movies = "https://demo2697834.mockable.io/movies"

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Get all movies
app.get('/api/movies', (req, res) => {
    makeApiCall(movies)
        .then(data => res.send(data))
        .catch(err => res.send(err.message))
})

app.listen(port)