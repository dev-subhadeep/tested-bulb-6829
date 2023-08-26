import React from "react"
import FetchDoctors from "../components/FetchDoctors"
import { Routes, Route, useParams } from "react-router-dom"

const Doctors = ({ spec }) => {
  const { specialization } = useParams()
  return (
    <div>
      <h1>{specialization}s</h1>
      <FetchDoctors spec={specialization} />
    </div>
  )
}

export default Doctors
