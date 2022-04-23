import styled from 'styled-components'

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  margin: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  cursor: pointer;
`
