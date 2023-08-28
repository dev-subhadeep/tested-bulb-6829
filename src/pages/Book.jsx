import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Doctors from "./Doctors"

const Book = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <h1 className="text-5xl col-span-2 mb-5">Choose a Specialist</h1>
        <Link to="/doctors/Cardiologist" className="card">
          <div>
            <img src="./icons/heart.png" alt="" />
          </div>
          Cardiologist
        </Link>
        <Link to="/doctors/Dermatologist" className="card">
          <div>
            <img src="./icons/spots.png" alt="" />
          </div>
          Dermatologist
        </Link>
        <Link to="/doctors/Gastroenterologist" className="card">
          <div>
            <img src="./icons/intestine.png" alt="" />
          </div>
          GI Doctor
        </Link>
        <Link to="/doctors/Neurologist" className="card">
          <div>
            <img src="./icons/brain.png" alt="" />
          </div>
          Neurologist
        </Link>
        <Link to="/doctors/Orthopedic" className="card">
          <div>
            <img src="./icons/bone.png" alt="" />
          </div>
          Orthopedic
        </Link>
        <Link to="/doctors/Pediatrician" className="card">
          <div>
            <img src="./icons/baby-boy.png" alt="" />
          </div>
          Pediatrician
        </Link>
      </div>
    </>
  )
}

export default Book
