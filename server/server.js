const express = require('express')
const path = require('path')

const { makeApiCall } = require('./API_helper')

const app = express()
const port = process.env.PORT || 8080

// API URL
const movies = "https://demo2697834.mockable.io/movies"

// Get all movies
app.get('/api/movies', (req, res) => {
    makeApiCall(movies)
        .then(data => res.send(data))
        .catch(err => res.send(err.message))
})

// Get a movie by ID
app.get('/api/movies/:id', (req, res) => {
    const id = req.params.id
    makeApiCall(movies + `/${id}`)
        .then(data => res.send(data))
        .catch(err => res.send(err.message))
})

app.listen(port, () => console.log(`Listening on port ${port}`))