import React, { useReducer, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import DoctorCard from "./DoctorCard"

const initialState = {
  loading: false,
  data: [],
  err: false,
}

const FetchDoctors = ({ spec }) => {
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
          err: true,
        }

      default:
        throw new Error("unrecognized dispatch")
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: "LOADING" })
    axios({
      url: `http://localhost:8080/doctors?specialization=${spec}`,
      method: "get",
    })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data })
      })
      .catch(() => dispatch({ type: "FAILURE" }))
  }, [])
  // console.log(state.data)
  return (
    <div>
      {state.data.length > 0 &&
        state.data.map((doc) => {
          return <DoctorCard key={doc.id} {...doc} />
        })}
    </div>
  )
}

export default FetchDoctors
