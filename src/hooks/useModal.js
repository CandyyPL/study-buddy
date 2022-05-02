import { useState } from 'react'
import Modal from 'components/Organisms/Modal/Modal'

export const useModal = (initialState) => {
  const [isOpen, setModalState] = useState(initialState)

  const handleOpenModal = () => setModalState(true)
  const handleCloseModal = () => setModalState(false)

  return { Modal, isOpen, handleOpenModal, handleCloseModal }
}
