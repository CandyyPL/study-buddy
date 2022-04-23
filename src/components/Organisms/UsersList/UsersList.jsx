import { data } from 'data/users'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import { Wrapper, StyledList } from './UsersList.styles'

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {data.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default UsersList
