import React, { useContext } from 'react'

import classes from './MovieCard.css'
import playBtn from '../../assets/sharp-play_arrow-24px.svg'
import ModalContext from '../../contexts/Modal/ModalContext'

const MovieCard = props => {

    // Initiate context
    const { toggleModal } = useContext(ModalContext)

    const handleUpdates = id => {
        toggleModal(id)
        props.click()
    }

    return (
        <div className={ classes.MovieCard }>
            <img
                src={ playBtn }
                alt="Play button"
                className={ classes.MoviePlayBtn }
                onClick={ () => handleUpdates(props.movieId) } />

            <img
                src={ props.imgSrc }
                alt={ props.title }
                className={ classes.MovieCardImg }
                id={ props.movieId } />

            <div className={ classes.MovieCardInfo }>
                <h3>{ props.title }</h3>
            </div>
        </div>
    )
}

export default MovieCard