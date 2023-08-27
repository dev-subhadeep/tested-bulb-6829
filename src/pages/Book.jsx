import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Doctors from "./Doctors"

const Book = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <h1 className="text-5xl col-span-3 mb-10">Choose a Specialist</h1>
        <Link to="/doctors/Cardiologist" className="card">
          Cardiologist
        </Link>
        <Link to="/doctors/Dermatologist" className="card">
          Dermatologist
        </Link>
        <Link to="/doctors/Gastroenterologist" className="card">
          Gastroenterologist
        </Link>
        <Link to="/doctors/Neurologist" className="card">
          Neurologist
        </Link>
        <Link to="/doctors/Orthopedic" className="card">
          Orthopedic
        </Link>
        <Link to="/doctors/Pediatrician" className="card">
          Pediatrician
        </Link>
      </div>
    </>
  )
}

export default Book
