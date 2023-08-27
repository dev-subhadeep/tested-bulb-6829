import React, { useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import { UserContext } from "../context/UserData"
import AppointmentCard from "../components/AppointmentCard"

const initialState = {
  loading: false,
  data: [],
  error: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      }

    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case "FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      throw new Error(`That was weird :(`)
  }
}

const Appointments = () => {
  const [doctors, setDoctors] = useState([])
  const [doctorImages, setDoctorImages] = useState([])
  const user = useContext(UserContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASEURL}/doctors`,
      method: "get",
    }).then((res) => {
      const docList = res.data.map((el) => el.name)
      const docImageList = res.data.map((el) => el.image)
      setDoctors(docList)
      setDoctorImages(docImageList)
    })
    if (user.authData.userId) {
      dispatch({ type: "LOADING" })
      axios({
        url: `${import.meta.env.VITE_BASEURL}/appointments`,
        method: "get",
        params: {
          userId: user.authData.userId,
        },
      })
        .then((res) => {
          dispatch({
            type: "SUCCESS",
            payload: res.data,
          })
        })
        .catch((err) => {
          dispatch({ type: "FAILURE" })
        })
    }
  }, [])
  console.log(state)
  return (
    <div>
      <h1>Appointments</h1>
      {state.data.length &&
        state.data.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            doctor={doctors[appointment.doctorId - 1]}
            image={doctorImages[appointment.doctorId - 1]}
            {...appointment}
          />
        ))}
    </div>
  )
}

export default Appointments
