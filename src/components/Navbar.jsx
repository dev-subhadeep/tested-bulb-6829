import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/appointments"}>Appointments</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar
