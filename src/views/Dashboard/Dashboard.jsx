import UsersList from 'components/Organisms/UsersList/UsersList'
import { GroupInfo } from './Dashboard.styles'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStudents } from 'hooks/useStudents'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper } from './Dashboard.styles'
import { Button } from 'components/Atoms/Button/Button.styles'

const Dashboard = () => {
  const { groups } = useStudents()

  const { id } = useParams()

  if (!id && groups.length) return <Navigate to={`/dashboard/${groups[0]}`} />

  return (
    <Wrapper>
      <GroupInfo>
        <StyledTitle>Group {id}</StyledTitle>
        <Link to='/dashboard/A'>
          <Button>A</Button>
        </Link>
        <Link to='/dashboard/B'>
          <Button>B</Button>
        </Link>
        <Link to='/dashboard/C'>
          <Button>C</Button>
        </Link>
      </GroupInfo>
      <UsersList />
    </Wrapper>
  )
}

export default Dashboard
