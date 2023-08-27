import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-400 px-5 py-5">
      <ul className="flex justify-between text-white">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/appointments"}>Appointments</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
