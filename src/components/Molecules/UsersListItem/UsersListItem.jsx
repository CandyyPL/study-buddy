import propTypes from 'prop-types'
import Average from 'components/Atoms/Average/Average'
import UserInfo from 'components/Atoms/UserInfo/UserInfo'
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton'
import { Wrapper } from './UserListItem.styles'

const UsersListItem = ({ userData: { name, average, attendance }, deleteUser }) => {
  return (
    <Wrapper>
      <Average avg={average} />
      <UserInfo userData={[name, attendance]} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  )
}

UsersListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string.isRequired,
    average: propTypes.string.isRequired,
    attendance: propTypes.string.isRequired,
  }),
}

export default UsersListItem
