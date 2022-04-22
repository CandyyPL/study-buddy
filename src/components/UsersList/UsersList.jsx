import { data } from 'data/users'
import UsersListItem from 'components/UsersList/UsersListItem'

const UsersList = () => {
  return (
    <>
      <ul>
        {data.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </>
  )
}

export default UsersList
