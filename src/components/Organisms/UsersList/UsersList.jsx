import React from 'react'
import { Wrapper, StyledList } from './UsersList.styles'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <Wrapper>
      {isLoading ? <h1>Loading...</h1> : <h1>Users List</h1>}
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default UsersList
