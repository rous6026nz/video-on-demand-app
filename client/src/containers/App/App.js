import React, { useEffect, useState } from 'react';
import axios from 'axios'

import classes from './App.css';
import Carousel from '../Carousel/Carousel'
import MovieCard from '../../components/MovieCard/MovieCard'

const App = () => {
  // Initiate state
  const [data, setData] = useState([])
  const [recentlyView, setRecently] = useState([])

  // Handle data fetching operations
  useEffect(() => {
    // Handle state changes.
    const handleStateChange = updates => {
      setData(updates.data.entries)
    }

    // Handle data fetching
    axios
      .get('/api/movies')
      .then(res => handleStateChange(res))

  }, [])

  // Handle updating recentlyView state
  const handleRecentWatch = id => {
    const index = data.findIndex(obj => obj.id === id)
    const movie = data[index]
    const a = recentlyView.findIndex(obj => obj.id === id)
    if (recentlyView.length > 0) {
      if (a >= 0) {
        return console.log("Movie already added!", a)
      } else {
        setRecently([movie, ...recentlyView])
        return console.log("Movie added! ", a)
      }
    } else {
      setRecently([movie])
      return console.log("Movie added!", a)
    }
  }

  console.log(recentlyView)

  // Build content helper function
  const handleBuildContent = arr => (
    arr.map(item => {
      return <MovieCard
        key={ item.id }
        title={ item.title }
        imgSrc={ item.images[0].url }
        movieId={ item.id }
        click={ () => handleRecentWatch(item.id) }
      />
    })
  )

  let movieList, recentlyViewedList
  if (data.length > 0) {
    movieList = handleBuildContent(data)
  }
  if (recentlyView.length > 0) {
    recentlyViewedList = handleBuildContent(recentlyView)
  }

  return (
    <div className={ classes.App }>
      <header className={ classes.AppHeader }>
        <h1>Video's On-Demand</h1>
      </header>
      <Carousel
        carouselHeading="New Carousel Heading"
        content={ movieList } />
      { recentlyView.length > 0 ?
        <Carousel
          carouselHeading="Recently Watched"
          content={ recentlyViewedList } />
        : null }
    </div>
  )
}

export default App;
