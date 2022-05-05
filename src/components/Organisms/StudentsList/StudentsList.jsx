import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StyledList, Wrapper } from './StudentsList.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import UsersListItem from 'components/Molecules/UsersListItem/StudentsListItem'
import { UsersContext } from 'providers/UsersProvider'
import { useStudents } from 'hooks/useStudents'

const UsersList = ({ handleOpenStudentDetails }) => {
  const { id: groupId } = useParams()
  const { getStudents } = useStudents()
  const { deleteUser } = useContext(UsersContext)

  const [students, setStudents] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { students },
      } = await getStudents(groupId)
      setStudents(students)
    })()
  }, [getStudents, groupId])

  return (
    <Wrapper>
      {students.length ? (
        <StyledTitle>Students List</StyledTitle>
      ) : (
        <StyledTitle>Loading...</StyledTitle>
      )}
      <StyledList>
        {students.map((userData) => (
          <UsersListItem
            onClick={() => handleOpenStudentDetails(userData.id)}
            key={userData.name}
            deleteUser={deleteUser}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default UsersList
