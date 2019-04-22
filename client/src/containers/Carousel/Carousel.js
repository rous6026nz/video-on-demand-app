import React, { useContext } from 'react'

import classes from './Carousel.css'
import VideoModal from '../../components/VideoModal/VideoModal'
import CarouselControlls from './components/CarouselControls/CarouselControls'

import ModalContext from '../../contexts/Modal/ModalContext'

const Carousel = props => {

  const { displayModal } = useContext(ModalContext)

  const wrapperRef = React.createRef()
  const carouselRef = React.createRef()

  return (
    <React.Fragment>
      <div className={ classes.CarouselContainer }>
        { props.carouselHeading ? <h3 className={ classes.CarouselHeading }>{ props.carouselHeading }</h3> : null }
        <div className={ classes.Carousel } ref={ carouselRef }>
          <CarouselControlls
            arrow="back"
            wrapperRef={ wrapperRef }
            carouselRef={ carouselRef }
          />
          <div className={ classes.CarouselInnerWrapper } ref={ wrapperRef }>
            { props.content }
          </div>
          <CarouselControlls
            arrow="forward"
            wrapperRef={ wrapperRef }
            carouselRef={ carouselRef }
          />
        </div>
      </div>

      { displayModal ? <VideoModal /> : null }
    </React.Fragment>
  )
}

export default Carousel