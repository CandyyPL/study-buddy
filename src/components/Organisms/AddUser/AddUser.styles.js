import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 28vw;
  height: fit-content;
  min-height: 20vh;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  margin: 25px;
`
