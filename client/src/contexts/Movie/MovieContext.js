import { createContext } from 'react'

const MovieContext = createContext({
    id: '',
    title: '',
    description: '',
    publishedDate: '',
    cover: '',
    video: '',
    height: '',
    width: '',
    duration: '',
    language: '',
    parentalRating: '',
    categories: [],
    credits: []
})

export default MovieContext