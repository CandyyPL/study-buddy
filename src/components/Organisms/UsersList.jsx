import { data } from 'data/users'
import UsersListItem from 'components/Molecules/UsersListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 28vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
`

const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {data.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default UsersList