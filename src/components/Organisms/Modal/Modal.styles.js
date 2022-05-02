import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.4);
  min-width: 600px;
  min-height: 600px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
