import UsersList from 'components/Organisms/UsersList/UsersList'
import styles from 'assets/styles/GlobalStyles.module.scss'

const Root = () => {
  return (
    <div className={`${styles.rootContainer}`}>
      <UsersList />
    </div>
  )
}

export default Root
