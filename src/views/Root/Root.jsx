import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from 'views/AddUser/AddUser'
import Dashboard from 'views/Dashboard/Dashboard'
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate'
import UsersProvider from 'providers/UsersProvider'

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/add-user' element={<AddUser />} />
            </Routes>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root
