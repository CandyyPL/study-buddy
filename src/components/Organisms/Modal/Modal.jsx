import { ModalWrapper } from './Modal.styles'
import { Button } from 'components/Atoms/Button/Button.styles'

const root = document.getElementById('root')

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper
      style={{
        overlay: {
          backgroundColor: '#444444c1',
        },
      }}
      isOpen={isOpen}
      onRequestClose={handleClose}
      appElement={root}>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  )
}

export default Modal
