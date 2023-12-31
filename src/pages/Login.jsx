import React, { useContext, useState } from "react"
import { UserContext } from "../context/UserData"
import axios from "axios"
import { useNavigate, Link, Navigate } from "react-router-dom"

const usersURL = `${import.meta.env.VITE_BASEURL}/users`

const Login = () => {
  const { login, authData } = useContext(UserContext)
  const [creds, setCreds] = useState({ email: "", password: "" })
  const navigate = useNavigate()
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
        navigate("/home")
      } else {
        alert("Account not found. Retry")
        console.log("wrong password")
      }
    })
  }
  if (authData.isLoggedIn) {
    return <Navigate to={"/home"} />
  }
  return (
    <div className="w-full">
      <div className="w-20">
        <img src="./logo.png" alt="" />
      </div>
      <h1 className="text-5xl">Login</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleFormData}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleFormData}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button className="rounded bg-blue-500 text-white py-2 w-full">
            Login
          </button>{" "}
          <span>Don't have an account?</span>{" "}
          <Link className="text-blue-500" to={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
