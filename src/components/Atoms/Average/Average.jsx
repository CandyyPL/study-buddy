import styles from './Average.module.scss'

const Average = ({ avg }) => {
  const getProperColor = () => {
    if (+avg < 3) return '#ff6e6e'
    else if (+avg >= 3 && +avg < 4) return '#ffcd69'
    else return '#71bf54'
  }

  return (
    <div className={`${styles.average}`} style={{ backgroundColor: `${getProperColor()}` }}>
      {avg}
    </div>
  )
}

export default Average
