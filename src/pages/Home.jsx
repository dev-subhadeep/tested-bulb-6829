import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={() => navigate("/book")}>Book and Appointment</button>
    </div>
  )
}

export default Home
