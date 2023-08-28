import React, { useContext } from "react"
import UserData from "../context/UserData"
import { Navigate } from "react-router-dom"

const Protected = ({ path, element }) => {
  const { authData } = useContext(UserData)

  if (!authData.isLoggedIn) {
    return <Navigate to="/login" />
  }

  return <Route path={path} element={element} />
}

export default Protected
