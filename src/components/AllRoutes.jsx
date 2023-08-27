import React from "react"
import { Route, Routes } from "react-router-dom"
import Appointments from "../pages/Appointments"
import Home from "../pages/Home"
import UserProfile from "../pages/UserProfile"
import Login from "../pages/Login"
import Book from "../pages/Book"
import Doctors from "../pages/Doctors"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"
import CreateAppointment from "../pages/CreateAppointment"

const AllRoutes = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/book"} element={<Book />} />
        <Route path={"/doctors/:specialization"} element={<Doctors />} />
        <Route path={"/appointments"} element={<Appointments />} />
        <Route path={"/appointment/:doctor"} element={<CreateAppointment />} />
        <Route path={"/profile"} element={<UserProfile />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
