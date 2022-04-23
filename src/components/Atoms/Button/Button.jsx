import styles from './Button.module.scss'
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg'

const Button = () => {
  return (
    <button className={`${styles.button}`}>
      <DeleteIcon />
    </button>
  )
}

export default Button
