import React from 'react'

import classes from './Video.css'

const Video = props => {

    return (
        <div className={ classes.Video } >
            <video autoPlay="true" controls >
                <source src={ props.video } type="video/mp4" />
                <p>Sorry, your browser doesn't support embedded videos.</p>
            </video>
        </div>
    )

}

export default Video