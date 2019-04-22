import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import classes from './CarouselControls.css'
import back from '../../../../assets/sharp-arrow_back_ios-24px.svg'
import forward from '../../../../assets/sharp-arrow_forward_ios-24px.svg'

const CarouselControls = React.forwardRef((props, ref) => {

    // Initiate state
    const [carouselInfo, setCarouselInfo] = useState({})

    let newXPosition, backBtnState, forwardBtnState
    newXPosition = carouselInfo.xPosition

    useEffect(() => {
        const abortController = new AbortController()

        const defaultState = {
            wrapperWidth: 9300, //props.wrapperRef.current.clientWidth,
            carouselWidth: props.carouselRef.current.clientWidth,
            xPosition: props.carouselRef.current.clientWidth,
            showForward: true,
            showBack: false
        }

        setCarouselInfo(defaultState)

        return function cleanup() {
            abortController.abort()
        }
    }, [])

    // Handle next position
    const handleNextPosition = () => {

        newXPosition = carouselInfo.xPosition + carouselInfo.carouselWidth

        // Check if the newXPosition is greater than wrapperWidth, if so take back to the start
        if (newXPosition > carouselInfo.wrapperWidth - carouselInfo.carouselWidth / 2 && newXPosition < carouselInfo.wrapperWidth) {
            newXPosition = carouselInfo.wrapperWidth - carouselInfo.carouselWidth / 2 // 8395
        } else if (newXPosition >= carouselInfo.wrapperWidth - carouselInfo.carouselWidth / 2) {
            newXPosition = 0
        }

        // Sets the show back button
        newXPosition <= carouselInfo.carouselWidth ? backBtnState = false : backBtnState = true

        // Sets the show forward button
        newXPosition > carouselInfo.wrapperWidth - carouselInfo.carouselWidth / 2 || carouselInfo.wrapperWidth < carouselInfo.carouselWidth ? forwardBtnState = false : forwardBtnState = true
        const update = {
            ...carouselInfo,
            xPosition: newXPosition,
            showBack: backBtnState,
            showForward: forwardBtnState
        }
        setCarouselInfo(update)
        props.wrapperRef.current.style = `transform: translateX(-${carouselInfo.xPosition}px)`
    }

    // Handle previous position
    const handlePreviousPosition = () => {

        newXPosition = carouselInfo.xPosition

        if (newXPosition <= carouselInfo.carouselWidth * 2) {
            newXPosition = 0
            backBtnState = false
        } else {
            newXPosition = carouselInfo.xPosition - carouselInfo.carouselWidth
            backBtnState = true
        }

        setCarouselInfo({
            ...carouselInfo,
            xPosition: newXPosition,
            showBack: backBtnState
        })
        props.wrapperRef.current.style = `transform: translateX(${carouselInfo.xPosition}px)`
    }

    return (
        <React.Fragment>
            { carouselInfo.showBack ?
                < div
                    className={ cx(classes.CarouselControls, classes.back) }
                    onClick={ handlePreviousPosition }
                    ref={ ref } >
                    <img src={ back } alt="Go to previous" />
                </div >
                : null }
            { carouselInfo.showForward ?
                < div
                    className={ cx(classes.CarouselControls, classes.forward) }
                    onClick={ handleNextPosition }
                    ref={ ref } >
                    <img src={ forward } alt="Go to next" />
                </div >
                : null }
        </React.Fragment>
    )
})

export default CarouselControls