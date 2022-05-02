import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AddUser from 'views/AddUser/AddUser'
import Dashboard from 'views/Dashboard/Dashboard'
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate'
import Modal from 'components/Organisms/Modal/Modal'

const Root = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          {isModalOpen ? <Modal handleClose={() => setIsModalOpen(false)} /> : null}
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
