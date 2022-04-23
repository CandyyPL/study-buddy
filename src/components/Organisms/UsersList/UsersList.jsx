import { data } from 'data/users'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import styles from './UsersList.module.scss'

const UsersList = () => {
  return (
    <div className={`${styles.usersListWrapper}`}>
      <ul className={`${styles.usersList}`}>
        {data.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </div>
  )
}

export default UsersList
