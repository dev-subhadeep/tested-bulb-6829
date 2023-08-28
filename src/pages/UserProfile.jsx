import React, { useContext } from "react"
import { UserContext } from "../context/UserData"
import { useNavigate } from "react-router"

const UserProfile = () => {
  const navigate = useNavigate()
  const { authData, logout } = useContext(UserContext)
  const handleLogout = () => {
    logout()
    navigate("/")
  }
  return (
    <div>
      <h1 className="text-5xl font-bold">
        Logged in as {authData.firstname ? authData.firstname : "Guest"}
      </h1>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white py-2 px-5 rounded mt-10"
      >
        Logout
      </button>
    </div>
  )
}

export default UserProfile
