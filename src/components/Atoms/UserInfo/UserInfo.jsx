import styles from './UserInfo.module.scss'

const UserInfo = ({ data: [name, attendance] }) => {
  return (
    <div className={`${styles.userInfo}`}>
      <span className={`${styles.userName}`}>{name}</span>
      <span className={`${styles.userAttendance}`}>attendance: {attendance}</span>
    </div>
  )
}

export default UserInfo
