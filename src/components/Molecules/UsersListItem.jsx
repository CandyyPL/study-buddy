import propTypes from 'prop-types'
import styled from 'styled-components'
import Average from 'components/Atoms/Average'
import UserInfo from 'components/Atoms/UserInfo'
import Button from 'components/Atoms/Button'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
  height: 100px;

  :not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`

const UsersListItem = ({ userData: { name, average, attendance } }) => {
  return (
    <Wrapper key={name}>
      <Average avg={average} />
      <UserInfo userData={[name, attendance]} />
      <Button />
    </Wrapper>
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
