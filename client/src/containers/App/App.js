import React, { useState, useEffect } from 'react'

import classes from './App.css'
import Carousel from '../Carousel/Carousel'
import ModalProvider from '../../providers/Modal/ModalProvider'
import MovieProvider from '../../providers/Movie/MovieProvider'
import MovieCard from '../../components/MovieCard/MovieCard'

const App = () => {

  // Initiate state
  const [data, setData] = useState([])
  const [recentlyView, setRecently] = useState([])

  // Handle data fetching operations
  useEffect(() => {
    const abortController = new AbortController()

    // Handle state changes.
    const handleStateChange = updates => {
      setData(updates.entries)
    }

    fetch('/api/movies')
      .then(res => res.json())
      .then(data => handleStateChange(data))
      .catch(err => console.error(err))

    return function cleanup() {
      abortController.abort()
    }

  }, [])

  // Build content helper function
  const handleBuildContent = arr => (
    arr.map(item => {
      return <MovieCard
        key={ item.id }
        title={ item.title }
        imgSrc={ item.images[0].url }
        movieId={ item.id }
        movieLink={ item.contents[0].url }
        click={ () => handleRecentWatch(item.id) }
      />
    })
  )

  // Handle updating recentlyView state
  const handleRecentWatch = (id) => {
    const index = data.findIndex(obj => obj.id === id)
    const movie = data[index]

    const a = recentlyView.findIndex(obj => obj.id === id)
    if (recentlyView.length > 0) {
      if (a >= 0) {
        return console.log("Movie already added!")
      } else {
        setRecently([movie, ...recentlyView])
      }
    } else {
      setRecently([movie])
    }
  }

  let recentlyViewedList, movieList

  if (data.length > 0) {
    movieList = handleBuildContent(data)
  }

  if (recentlyView.length > 0) {
    recentlyViewedList = handleBuildContent(recentlyView)
  }

  return (
    <ModalProvider>
      <div className={ classes.App }>
        <header className={ classes.AppHeader }>
          <h1>Video's On-Demand</h1>
        </header>
        <MovieProvider>
          <Carousel
            carouselHeading="New Releases"
            content={ movieList } />

          { recentlyView.length > 0 ?
            <Carousel
              carouselHeading="Recently Watched"
              content={ recentlyViewedList } />
            : null }
        </MovieProvider>
      </div>
    </ModalProvider>
  )
}

export default App;
