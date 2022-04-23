import propTypes from 'prop-types'
import Average from 'components/Atoms/Average/Average'
import UserInfo from 'components/Atoms/UserInfo/UserInfo'
import Button from 'components/Atoms/Button/Button'
import { Wrapper } from './UserListItem.styles'

const UsersListItem = ({ userData: { name, average, attendance }, onDelete }) => {
  return (
    <Wrapper key={name}>
      <Average avg={average} />
      <UserInfo userData={[name, attendance]} />
      <Button onClick={() => onDelete(name)} />
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
