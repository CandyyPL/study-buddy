import React, { useState, useEffect } from 'react'
import { users as usersData } from 'data/users'
import { mockAPI } from 'helpers/mockApi'

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    mockAPI(1000, usersData).then((res) => {
      setUsers(res)
    })
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
