import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from 'providers/AuthProvider'
import PrivateRoute from 'helpers/PrivateRoute'
import Authenticated from 'views/Authenticated/Authenticated'
import Unauthenticated from 'views/Unauthenticated/Unauthenticated'

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <PrivateRoute unauth={<Unauthenticated />}>
            <Authenticated />
          </PrivateRoute>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default Root
