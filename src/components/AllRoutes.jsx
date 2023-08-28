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
import Protected from "./Protected"

const AllRoutes = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <Routes>
        <Route
          path={"/home"}
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path={"/book"}
          element={
            <Protected>
              <Book />
            </Protected>
          }
        />
        <Route
          path={"/doctors/:specialization"}
          element={
            <Protected>
              <Doctors />
            </Protected>
          }
        />
        <Route
          path={"/appointments"}
          element={
            <Protected>
              <Appointments />
            </Protected>
          }
        />
        <Route
          path={"/appointment/:doctor"}
          element={
            <Protected>
              <CreateAppointment />
            </Protected>
          }
        />
        <Route
          path={"/profile"}
          element={
            <Protected>
              <UserProfile />
            </Protected>
          }
        />
        <Route path={"/"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
