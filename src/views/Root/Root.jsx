import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { Wrapper } from './Root.styles'
import UsersList from 'components/Organisms/UsersList/UsersList'

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
