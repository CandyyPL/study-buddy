import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 20px;
  }
`
