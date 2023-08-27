import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserData"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const CreateAppointment = () => {
  const user = useContext(UserContext)
  const doctorID = useParams()
  const [doctorName, setDoctorName] = useState("")
  const [formData, setFormData] = useState({
    doctorId: "",
    userId: "",
    date_day: "",
    date_month: "",
    date_year: "",
    time_hr: "",
    time_min: "",
  })
  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASEURL}/doctors`,
      method: "get",
      params: {
        id: doctorID.doctor,
      },
    }).then((res) => setDoctorName(res.data[0].name))
  }, [])

  const handleFormDataText = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      doctorId: Number(doctorID.doctor),
      userId: Number(user.authData.userId),
    })
  }

  const handleFormDataNumber = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
      doctorId: Number(doctorID.doctor),
      userId: Number(user.authData.userId),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData)
    axios({
      url: `${import.meta.env.VITE_BASEURL}/appointments`,
      method: "post",
      data: formData,
    })
  }

  return (
    <div>
      <h1>Setup Appointment with {doctorName}</h1>
      <form onSubmit={handleSubmit}>
        <select name="date_day" onChange={handleFormDataNumber}>
          <option value="">Day</option>
          {new Array(30).fill(0).map((_, id) => (
            <option key={id + 1} value={id + 1}>
              {id + 1}
            </option>
          ))}
        </select>
        <select name="date_month" onChange={handleFormDataText}>
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select name="date_year" onChange={handleFormDataNumber}>
          <option value="">Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select name="time_hr" onChange={handleFormDataNumber}>
          <option value="">Hour</option>
          {new Array(23).fill(0).map((_, id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <select name="time_min" onChange={handleFormDataNumber}>
          <option value="">Minute</option>
          {new Array(59).fill(0).map((_, id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>

        <button>Book Appointment</button>
      </form>
    </div>
  )
}

export default CreateAppointment
