import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import UserData from "./context/UserData.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserData>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserData>
)
