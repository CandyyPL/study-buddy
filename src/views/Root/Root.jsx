import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AddUser from 'views/AddUser/AddUser'
import Dashboard from 'views/Dashboard/Dashboard'
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate'

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path=':id' element={<Dashboard />} />
            </Route>
            <Route path='/add-user' element={<AddUser />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root
