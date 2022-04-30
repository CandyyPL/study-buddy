import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 580px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 50px;
`

export const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`
