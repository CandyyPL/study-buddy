import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './UsersList.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import { UserShape } from 'types'
import { UsersContext } from 'providers/UsersProvider'

const UsersList = ({ users }) => {
  const { deleteUser } = useContext(UsersContext)

  return (
    <>
      {users.length ? null : <StyledTitle>Loading...</StyledTitle>}
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default UsersList
