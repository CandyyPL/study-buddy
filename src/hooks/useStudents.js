import { useState, useEffect } from 'react'
import axios from 'axios'

export const useStudents = ({ groupId = '' } = {}) => {
  const [groups, setGroups] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (!groupId) return
    axios
      .get(`/students${groupId ? `?group=${groupId}` : ''}`)
      .then(({ data: { students } }) => setStudents(students))
      .catch((err) => console.log(err))
  }, [groupId])

  return { groups, students }
}
