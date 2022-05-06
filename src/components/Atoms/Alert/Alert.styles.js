import styled from 'styled-components'

export const StyledAlert = styled.div`
  width: 60%;
  height: 100px;
  background-color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.mm};
  padding: 10px;
  border-radius: 5px;
`
