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
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{specialization}</p>
      <p>Rating: {rating}</p>
      <button onClick={showDoc}>Book Appointment</button>
      <button>View Profile</button>
    </div>
  )
}

export default DoctorCard
