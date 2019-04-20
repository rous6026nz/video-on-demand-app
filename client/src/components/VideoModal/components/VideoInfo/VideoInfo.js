import React, { useContext } from 'react'

import classes from './VideoInfo.css'

const VideoInfo = props => {

    const formatDuration = seconds => {
        const date = new Date()
        date.setSeconds(seconds)
        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
    }

    return (
        <div className={ classes.VideoInfo }>
            <h2>{ props.title }</h2>
            <hr></hr>
            <p>{ props.description }</p>
            <p>Rating: { props.parentalRating }</p>
            <p>Duration: { formatDuration(props.duration) }</p>
            <h3>Credits</h3>
            <hr></hr>
            <ul className={ classes.creditsList }>
                { props.credits }
            </ul>
        </div>
    )
}

export default VideoInfo