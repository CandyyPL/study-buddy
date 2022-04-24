import React from 'react'
import PropTypes from 'prop-types'
import { ViewWrapper } from 'components/Templates/ViewWrapper/ViewWrapper'
import { StyledList } from './UsersList.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import { UserShape } from 'types'

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <ViewWrapper>
      {isLoading ? <StyledTitle>Loading...</StyledTitle> : <StyledTitle>Users List</StyledTitle>}
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </ViewWrapper>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default UsersList
