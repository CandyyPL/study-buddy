import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/students').then(({ data: { students } }) => setUsers(students))
  }, [])

  const deleteUser = (userName) => {
    const filteredUsers = users.filter((user) => user.name !== userName)
    setUsers(filteredUsers)
  }

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    }

    setUsers([...users, newUser])
  }

  return <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>{children}</UsersContext.Provider>
}

export default UsersProvider
