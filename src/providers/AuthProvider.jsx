import { auth } from 'auth/firebaseAuth'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsub
  }, [])

  const provide = { ...currentUser }

  return <AuthContext.Provider value={provide}>{!loading ? children : null}</AuthContext.Provider>
}

export default AuthProvider
