import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { Wrapper } from './Root.styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from 'views/AddUser/AddUser'
import { users as usersData } from 'data/users'
import { mockAPI } from 'helpers/mockApi'
import Navigation from 'components/Organisms/Navigation/Navigation'
import Dashboard from 'views/Dashboard/Dashboard'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

const Root = () => {
  const [users, setUsers] = useState([])

  const [formValues, setFormValues] = useState(initialFormState)

  useEffect(() => {
    mockAPI(1000, usersData).then((res) => {
      setUsers(res)
    })
  }, [])

  const deleteUser = (userName) => {
    const filteredUsers = users.filter((user) => user.name !== userName)
    setUsers(filteredUsers)
  }

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddUser = (e) => {
    e.preventDefault()

    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }

    setFormValues(initialFormState)

    setUsers([...users, newUser])
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navigation />
          <Routes>
            <Route path='/' element={<Dashboard users={users} deleteUser={deleteUser} />} />
            <Route
              path='/add-user'
              element={
                <AddUser handleInputChange={handleInputChange} handleAddUser={handleAddUser} formValues={formValues} />
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
}

export default Root
