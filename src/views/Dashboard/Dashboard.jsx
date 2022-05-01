import UsersList from 'components/Organisms/UsersList/UsersList'
import { GroupInfo } from './Dashboard.styles'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper } from './Dashboard.styles'
import { Button } from 'components/Atoms/Button/Button.styles'

const Dashboard = () => {
  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])

  const { id } = useParams()
  const currentGroup = id || groups[0]

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`/students?group=${currentGroup}`)
      .then(({ data: { students } }) => setStudents(students))
      .catch((err) => console.log(err))
  }, [currentGroup])

  return (
    <Wrapper>
      <GroupInfo>
        <StyledTitle>Group {currentGroup}</StyledTitle>
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
      <UsersList users={students} />
    </Wrapper>
  )
}

export default Dashboard
