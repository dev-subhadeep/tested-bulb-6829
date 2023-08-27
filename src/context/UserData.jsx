import React, { createContext, useContext, useState } from "react"

export const UserContext = createContext()

const UserData = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoggedIn: false,
    userId: "",
    firstname: "",
  })
  return (
    <UserContext.Provider
      value={{
        authData,
        login: (uId, firstname) => {
          setAuthData({
            isLoggedIn: true,
            userId: uId,
            firstname: firstname,
          })
        },
        logout: () => {
          setAuthData({ isLoggedIn: false, userId: "" })
        },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserData
