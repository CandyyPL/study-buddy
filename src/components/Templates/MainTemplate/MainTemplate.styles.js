import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-columns: 200px 1fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.lightLightGrey};
`
