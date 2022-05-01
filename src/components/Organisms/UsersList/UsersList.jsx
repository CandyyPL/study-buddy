import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StyledList, Wrapper } from './UsersList.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem'
import { UsersContext } from 'providers/UsersProvider'
import { useStudents } from 'hooks/useStudents'

const UsersList = () => {
  const { id } = useParams()
  const { getStudents } = useStudents()
  const { deleteUser } = useContext(UsersContext)

  const [students, setStudents] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { students },
      } = await getStudents(id)
      setStudents(students)
    })()
  }, [id])

  return (
    <Wrapper>
      {students.length ? <StyledTitle>Students List</StyledTitle> : <StyledTitle>Loading...</StyledTitle>}
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default UsersList
