import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserData"
import axios from "axios"

const Home = () => {
  const navigate = useNavigate()
  const { authData } = useContext(UserContext)
  const [firstname, setFirstName] = useState("")
  // console.log(authData)
  //   useEffect(() => {
  //     axios({
  //       url: `${import.meta.env.VITE_BASEURL}/users`,
  //       method: "get",
  //       params: {
  //         id: authData.userId,
  //       },
  //     }).then((res) => console.log(res.data[0].firstname))
  //   }, [authData])
  return (
    <div className="flex flex-col">
      <div className="w-20">
        <img src="./logo.png" alt="" />
      </div>
      <h1 className="text-5xl font-bold">Hi there,</h1>
      <div className="text-5xl">
        {" "}
        {authData.firstname ? authData.firstname : "Guest"}
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Link to="/doctors/Cardiologist" className="card">
            <div>
              <img src="./pills.png" alt="" />
            </div>
            Purchase Medicine
          </Link>
          <Link to="/book" className="card">
            <div>
              <img src="./schedule.png" alt="" />
            </div>
            Schedule Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
