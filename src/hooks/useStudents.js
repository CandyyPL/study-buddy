import axios from 'axios'

export const useStudents = () => {
  const getGroups = async () => {
    try {
      const result = await axios.get('/groups')
      return result.data
    } catch (e) {
      console.log(e)
    }
  }

  const getStudents = async (groupId = '') => {
    try {
      const result = axios.get(`/students${groupId ? `?group=${groupId}` : ''}`)
      return result
    } catch (e) {
      console.log(e)
    }
  }

  return { getGroups, getStudents }
}
