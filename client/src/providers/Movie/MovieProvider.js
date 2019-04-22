import React, { useState, useEffect } from 'react'

import MovieContext from '../../contexts/Movie/MovieContext'

const MovieProvider = ({ children }) => {

    // Initiate state
    const [movieData, setMovieData] = useState([])

    // Handle data fetching operations
    useEffect(() => {

        const abortController = new AbortController()

        // Handle state changes.
        const handleStateChange = updates => {
            setMovieData(updates.entries)
        }

        fetch('/api/movies')
            .then(res => res.json())
            .then(data => handleStateChange(data))
            .catch(err => console.error(err))

        return function cleanup() {
            abortController.abort()
        }

    }, [])

    const data = movieData.map((movie, index) => {
        return {
            key: index,
            id: movie.id,
            title: movie.title,
            description: movie.description,
            publishedDate: movie.publishedDate,
            cover: movie.cover,
            video: movie.contents[0].url,
            height: movie.contents[0].height,
            width: movie.contents[0].width,
            duration: movie.contents[0].duration,
            language: movie.contents[0].language,
            parentalRating: movie.parentalRatings[0].rating,
            categories: movie.categories,
            credits: movie.credits
        }
    })

    return (
        <MovieContext.Provider value={ data }>
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider