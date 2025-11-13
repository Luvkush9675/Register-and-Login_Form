import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LogIn from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
