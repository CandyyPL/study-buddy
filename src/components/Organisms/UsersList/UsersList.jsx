import React, { useState, useEffect } from 'react'
import { users as usersData } from 'data/users'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import { Wrapper, StyledList } from './UsersList.styles'
import { mockAPI } from 'helpers/mockApi'

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <StyledList>
          {users.map((userData) => (
            <UsersListItem onDelete={deleteUser} userData={userData} />
          ))}
        </StyledList>
      )}
    </Wrapper>
  )
}

export default UsersList
