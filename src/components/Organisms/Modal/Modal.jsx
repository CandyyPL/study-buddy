import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { ModalWrapper } from './Modal.styles'
import { Button } from 'components/Atoms/Button/Button.styles'

const modalContainer = document.getElementById('modal-container')

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div')

  useEffect(() => {
    modalContainer.appendChild(modalNode)

    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalNode
  )
}

export default Modal
