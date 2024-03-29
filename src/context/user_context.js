import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null)
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } =
    useAuth0()
  useEffect(() => {
    console.log(`user: ${user}`)
    console.log(`isAuthenticated : ${isAuthenticated}`)
    console.log(`isLoading :${isLoading}`)
    if (user) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
  }, [isAuthenticated, user, isLoading])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
