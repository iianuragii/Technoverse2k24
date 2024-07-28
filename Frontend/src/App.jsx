import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Support from './Components/Support'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import './style.css';
import { Routes, Route } from 'react-router-dom'

const App = () => {  
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path="/home" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>           
    </Routes>
    </>
  )
}

export default App