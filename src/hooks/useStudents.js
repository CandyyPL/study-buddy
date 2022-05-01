import axios from 'axios'
import { useCallback } from 'react'

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups')
      return result.data
    } catch (e) {
      console.log(e)
    }
  }, [])

  const getStudents = useCallback(async (groupId = '') => {
    try {
      const result = axios.get(`/students${groupId ? `?group=${groupId}` : ''}`)
      return result
    } catch (e) {
      console.log(e)
    }
  }, [])

  return { getGroups, getStudents }
}
