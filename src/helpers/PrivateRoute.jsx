import { AuthContext } from 'providers/AuthProvider'
import { useContext } from 'react'

const PrivateRoute = ({ children, unauth }) => {
  const userData = useContext(AuthContext)

  console.log(userData)

  if (!userData.uid) return unauth

  return children
}

export default PrivateRoute
