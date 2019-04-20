import React, { useContext } from 'react'

import classes from './Carousel.css'
import VideoModal from '../../components/VideoModal/VideoModal'
import ModalContext from '../../contexts/Modal/ModalContext'

const Carousel = props => {

  const { displayModal } = useContext(ModalContext)

  return (
    <React.Fragment>
      <div className={ classes.CarouselContainer }>
        { props.carouselHeading ? <h3 className={ classes.CarouselHeading }>{ props.carouselHeading }</h3> : null }
        <div className={ classes.Carousel }>
          <div className={ classes.CarouselInnerWrapper }>
            { props.content }
          </div>
        </div>
      </div>

      { displayModal ? <VideoModal /> : null }
    </React.Fragment>
  )
}

export default Carousel