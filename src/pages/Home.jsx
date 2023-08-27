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
      <h1 className="text-5xl font-bold">Good Morning,</h1>
      <div className="text-5xl">
        {" "}
        {authData.firstname ? authData.firstname : "Guest"}
      </div>
      <div>
        <button
          className="rounded bg-blue-600 py-2 px-2 text-white my-10"
          onClick={() => navigate("/book")}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default Home
