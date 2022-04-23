import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  )
}

export default Button
