import Average from 'components/Atoms/Average/Average'
import UserInfo from 'components/Atoms/UserInfo/UserInfo'
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton'
import { Wrapper } from './UsersListItem.styles'

const UsersListItem = ({ userData: { name, average, attendance }, deleteUser }) => {
  return (
    <Wrapper>
      <Average avg={average} />
      <UserInfo userData={[name, attendance]} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  )
}

export default UsersListItem
