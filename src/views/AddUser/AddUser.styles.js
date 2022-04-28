import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 500px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 50px;
  grid-row: 2/3;
  grid-column: 2;
  place-self: center;
`
