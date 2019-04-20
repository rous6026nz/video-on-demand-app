import React, { useState } from 'react'
import ModalContext from '../../contexts/Modal/ModalContext'

const ModalProvider = ({ children }) => {

    const toggleModal = id => {
        setDisplay(prevState => {
            return {
                ...prevState,
                movieId: id,
                displayModal: !prevState.displayModal
            }
        })
    }

    // Default state
    const modalState = {
        displayModal: false,
        movieId: '',
        toggleModal
    }

    // Initiate state
    const [display, setDisplay] = useState(modalState)

    return (
        <ModalContext.Provider value={ display }>
            { children }
        </ModalContext.Provider>
    )

}

export default ModalProvider