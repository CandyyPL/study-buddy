import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/Theme'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { Wrapper, StyledNav } from './Root.styles'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UsersList from 'components/Organisms/UsersList/UsersList'
import AddUser from 'components/Organisms/AddUser/AddUser'
import { users as usersData } from 'data/users'
import { mockAPI } from 'helpers/mockApi'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

const Root = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [formValues, setFormValues] = useState(initialFormState)

  useEffect(() => {
    setIsLoading(true)
    mockAPI(1000, usersData).then((res) => {
      setIsLoading(false)
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
          <StyledNav>
            <Link to='/'>Home</Link>
            <Link to='/add-user'>Add user</Link>
          </StyledNav>
          <Routes>
            <Route path='/' element={<UsersList users={users} deleteUser={deleteUser} isLoading={isLoading} />} />
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
