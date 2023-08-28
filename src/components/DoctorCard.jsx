import React from "react"
import { useNavigate } from "react-router-dom"

const DoctorCard = ({
  name,
  bio,
  experience,
  fees,
  gender,
  image,
  patients,
  rating,
  specialization,
  id,
}) => {
  const navigate = useNavigate()

  const showDoc = () => {
    navigate(`/appointment/${id}`)
  }

  return (
    <div className="card flex gap-x-5 mb-5">
      <div>
        <img src={image} alt={name} className="rounded-full" />
      </div>
      <div className="flex justify-left flex-col">
        <h3 className="text-3xl">{name}</h3>
        <p>{specialization}</p>
        <p>Rating: {rating}</p>
        <div className="flex gap-x-3 mt-4">
          <button
            onClick={showDoc}
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Book Appointment
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
