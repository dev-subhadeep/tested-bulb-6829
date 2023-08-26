import { useState } from "react"
import "./App.css"
import FetchDoctors from "./components/FetchDoctors"
import AllRoutes from "./components/AllRoutes"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <AllRoutes />
      <Navbar />
    </>
  )
}

export default App
