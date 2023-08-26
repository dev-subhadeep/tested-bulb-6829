import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Doctors from "./Doctors"

const Book = () => {
  return (
    <div>
      <Link to="/doctors/Cardiologist">Cardiologist</Link>
      <Link to="/doctors/Dermatologist">Dermatologist</Link>
      <Link to="/doctors/Gastroenterologist">Gastroenterologist</Link>
      <Link to="/doctors/Neurologist">Neurologist</Link>
      <Link to="/doctors/Orthopedic">Orthopedic</Link>
      <Link to="/doctors/Pediatrician">Pediatrician</Link>
    </div>
  )
}

export default Book
