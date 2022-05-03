import UsersList from 'components/Organisms/UsersList/StudentsList'
import { GroupInfo } from './Dashboard.styles'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStudents } from 'hooks/useStudents'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper } from './Dashboard.styles'
import { Button } from 'components/Atoms/Button/Button.styles'
import { useEffect, useState } from 'react'
import { useModal } from 'hooks/useModal'
import Modal from 'components/Organisms/Modal/Modal'
import StudentDetails from 'components/Molecules/StudentDetails/StudentDetails'

const Dashboard = () => {
  const { getGroups, getStudentById } = useStudents()
  const [groups, setGroups] = useState([])
  const [currentStudent, setCurrentStudent] = useState({})

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleOpenStudentDetails = async (id) => {
    const result = await getStudentById(id)
    const student = result.data.matchingStudent

    setCurrentStudent(student)
    handleOpenModal()
  }

  useEffect(() => {
    ;(async () => {
      const groups = await getGroups()
      setGroups(groups)
    })()
  }, [getGroups])

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
      <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <StudentDetails student={currentStudent} />
      </Modal>
    </Wrapper>
  )
}

export default Dashboard
