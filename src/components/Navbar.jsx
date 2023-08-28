import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"
import { AiTwotoneCalendar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-400 px-5 py-2">
      <ul className="flex justify-between text-white">
        <li className="flex flex-col justify-center items-center">
          <BiHomeAlt2 size="2em" />
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex flex-col justify-center items-center">
          <AiTwotoneCalendar size="2em" />
          <Link to={"/appointments"}>Appointments</Link>
        </li>
        <li className="flex flex-col justify-center items-center">
          <BsFillPersonFill size="2em" />
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li className="flex flex-col justify-center items-center">
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
