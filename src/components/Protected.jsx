import React, { useContext } from "react"
import { UserContext } from "../context/UserData"
import { Navigate } from "react-router-dom"

const Protected = ({ children }) => {
  const { authData } = useContext(UserContext)

  if (!authData.isLoggedIn) {
    return <Navigate to="/" />
  }

  return children
}

export default Protected
