import axios from "axios"
import React, { useState } from "react"

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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" onChange={handleFormData} />
        <input type="text" name="lastname" onChange={handleFormData} />
        <input type="email" name="email" onChange={handleFormData} />
        <input type="password" name="password" onChange={handleFormData} />

        <select name="sex" onChange={handleFormData}>
          <option value=""> --Please choose and option-- </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="text" name="weight" onChange={handleFormData} />
        <input type="text" name="age" onChange={handleFormData} />
        <input type="text" name="image" onChange={handleFormData} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register
