import React from 'react'

import classes from './Carousel.css'

const Carousel = props => {

  return (
    <div className={ classes.CarouselContainer }>
      { props.carouselHeading ? <h3 className={ classes.CarouselHeading }>{ props.carouselHeading }</h3> : null }
      <div className={ classes.Carousel }>
        <div className={ classes.CarouselInnerWrapper }>{ props.content }</div>
      </div>
    </div>
  )
}

export default Carousel