import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    sex: "",
    weight: "",
    age: "",
    image: "",
  })

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData)
    axios({
      url: `${import.meta.env.VITE_BASEURL}/users`,
      method: "post",
      data: formData,
    })
  }

  return (
    <div className="w-full">
      <h1 className="text-5xl">Register</h1>
      <form
        onSubmit={handleSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            type="text"
            name="firstname"
            onChange={handleFormData}
            placeholder="First Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastname"
            onChange={handleFormData}
            placeholder="Last Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            onChange={handleFormData}
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            onChange={handleFormData}
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <select
            name="sex"
            onChange={handleFormData}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value=""> -- Select an Option --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-10">
          <input
            type="text"
            name="image"
            onChange={handleFormData}
            placeholder="Profile Picture"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="weight"
            onChange={handleFormData}
            placeholder="Weight in Kg"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="age"
            onChange={handleFormData}
            placeholder="Age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="rounded bg-blue-500 text-white py-2 w-full">
          Register
        </button>
        <p>
          <span>Already have an account?</span>{" "}
          <Link to={"/login"} className="text-blue-400">
            Sign in
          </Link>{" "}
        </p>
      </form>
    </div>
  )
}

export default Register
