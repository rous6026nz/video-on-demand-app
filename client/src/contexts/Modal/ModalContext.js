import { createContext } from 'react'

const ModalContext = createContext({
    displayModal: false,
    movieId: '',
    toggleModal: () => { }
})

export default ModalContext