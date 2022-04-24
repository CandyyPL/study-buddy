import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  cursor: pointer;
`
