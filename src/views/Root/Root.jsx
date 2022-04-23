import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/Theme'
import UsersList from 'components/Organisms/UsersList'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Root
