import propTypes from 'prop-types'

const UsersListItem = ({ userData: { name, average, attendance } }) => {
  return (
    <>
      <li>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>attendance: {attendance}</p>
        </div>
        <button>X</button>
      </li>
    </>
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
