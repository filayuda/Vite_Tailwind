import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Layouts/Dashboard"
import { useDispatch } from "react-redux"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
