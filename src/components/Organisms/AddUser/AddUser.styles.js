import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 28vw;
  height: fit-content;
  min-height: 20vh;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  margin: 25px;
  padding: 25px;
`

export const StyledTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightGrey};
`
