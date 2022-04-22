import React from 'react'
import Bots from './Bots/Bots'
import LogIn from './LogIn/LogIn'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LogIn/>} />
          <Route path="/bots/:token" element={<Bots/>} />
      </Routes>
    </BrowserRouter>
  )
}
