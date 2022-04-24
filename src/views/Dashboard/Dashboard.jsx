import UsersList from 'components/Organisms/UsersList/UsersList'
import { ViewWrapper } from 'components/Templates/ViewWrapper/ViewWrapper'

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  )
}

export default Dashboard
