import React, { useContext, useState } from "react"
import { UserContext } from "../context/UserData"
import axios from "axios"
import { Navigate } from "react-router-dom"

const usersURL = `${import.meta.env.VITE_BASEURL}/users`

const Login = () => {
  const { login } = useContext(UserContext)
  const [creds, setCreds] = useState({ email: "", password: "" })
  const handleFormData = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(usersURL)
    axios({
      method: "get",
      url: usersURL,
      params: {
        email: creds.email,
      },
    }).then((res) => {
      if (res.data[0].password === creds.password) {
        login(res.data[0].id, res.data[0].firstname)
        ;<Navigate to="/" replace={true} />
        console.log(res.data[0].id)
      } else {
        console.log("galat hai")
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleFormData}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleFormData}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
