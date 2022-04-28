import styled from 'styled-components'

export const Input = styled.input`
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;

  &:focus {
    outline: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }
`
