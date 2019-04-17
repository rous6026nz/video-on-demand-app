import React from 'react'

import classes from './MovieCard.css'

const MovieCard = props => {
    return (
        <div className={ classes.MovieCard }>
            <img src={ props.imgSrc } alt={ props.title } className={ classes.movieCardImg } />
            <div className={ classes.movieCardInfo }>
                <h3>{ props.title }</h3>
            </div>
            <div className={ classes.movieCardFooter }>
                <button className={ classes.btn }>See More</button>
                <button className={ classes.btn } onClick={ props.click } id={ props.movieId }>Watch</button>
            </div>
        </div>
    )
}

export default MovieCard