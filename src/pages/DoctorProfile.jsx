import React from "react"

const DoctorProfile = () => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{specialization}</p>
      <p>Rating: {rating}</p>
      <button onClick={showDoc}>Book Appointment</button>
    </div>
  )
}

export default DoctorProfile
