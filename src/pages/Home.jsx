import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserData"
import axios from "axios"

const Home = () => {
  const navigate = useNavigate()
  const { authData } = useContext(UserContext)
  const [firstname, setFirstName] = useState("")
  console.log(authData)
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
    <div>
      Welcome {authData.firstname ? authData.firstname : "Guest"}
      <button onClick={() => navigate("/book")}>Book and Appointment</button>
    </div>
  )
}

export default Home
