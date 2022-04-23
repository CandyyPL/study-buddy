import propTypes from 'prop-types'
import styles from './UsersListItem.module.scss'
import Average from 'components/Atoms/Average/Average'
import UserInfo from 'components/Atoms/UserInfo/UserInfo'
import Button from 'components/Atoms/Button/Button'

const UsersListItem = ({ userData: { name, average, attendance } }) => {
  return (
    <li className={`${styles.usersListItem}`}>
      <Average avg={average} />
      <UserInfo data={[name, attendance]} />
      <Button />
    </li>
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
