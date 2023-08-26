import React from "react"
import { Route, Routes } from "react-router-dom"
import Appointments from "../pages/Appointments"
import Home from "../pages/Home"
import UserProfile from "../pages/UserProfile"
import Login from "../pages/Login"
import Book from "../pages/Book"
import Doctors from "../pages/Doctors"
import NotFound from "../pages/NotFound"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/book"} element={<Book />} />
        <Route path={"/doctors/:specialization"} element={<Doctors />} />
        <Route path={"/appointments"} element={<Appointments />} />
        <Route path={"/profile"} element={<UserProfile />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
