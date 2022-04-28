import { useContext } from 'react'
import UsersList from 'components/Organisms/UsersList/UsersList'
import { Wrapper } from 'components/Organisms/UsersList/UsersList.styles'
import { UsersContext } from 'providers/UsersProvider'

const Dashboard = () => {
  const { users } = useContext(UsersContext)

  return (
    <Wrapper>
      <UsersList users={users} />
    </Wrapper>
  )
}

export default Dashboard
