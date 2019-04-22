import React, { useContext } from 'react'

import classes from './VideoModal.css'
import ModalContext from '../../contexts/Modal/ModalContext'
import MovieContext from '../../contexts/Movie/MovieContext'
import Video from './components/Video/Video'
import VideoInfo from './components/VideoInfo/VideoInfo'
import closeModal from '../../assets/sharp-close-24px.svg'

/*
    The VideoModal will recieve an ID and video link which
    will be used to render the video.
*/
const VideoModal = props => {

    // Initiate context
    const { toggleModal, movieId } = useContext(ModalContext)
    const movies = useContext(MovieContext)

    // Fetch the current movies data
    const index = movies.findIndex(obj => obj.id === movieId)
    const currentMovieData = movies[index]
    const credits = currentMovieData.credits.map((item, index) => {
        return item.name !== item.role ?
            <li key={ index }>{ item.name }<br />Role: { item.role }</li> :
            <li key={ index }>{ item.name }</li>
    })

    return (
        <div className={ classes.VideoModal }>
            <div className={ classes.VideoModalControls }>
                <img
                    src={ closeModal }
                    alt="Close video"
                    className={ classes.closeModal }
                    onClick={ toggleModal }
                />
            </div>
            <Video
                video={ currentMovieData.video }
            />
            <VideoInfo
                title={ currentMovieData.title }
                description={ currentMovieData.description }
                parentalRating={ currentMovieData.parentalRating }
                duration={ currentMovieData.duration }
                credits={ credits }
            />
        </div >
    )
}

export default VideoModal