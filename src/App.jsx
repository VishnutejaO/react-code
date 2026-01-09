import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/login.jsx'
import Register from './components/Register.jsx'
import Navbar from './components/Navbar.jsx'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
