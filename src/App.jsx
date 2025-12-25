import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LogIn from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App

