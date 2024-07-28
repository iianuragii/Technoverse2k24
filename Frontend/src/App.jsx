import React from 'react'
import Auth from './Components/Auth'
import Hero from './Components/Hero'
import About from './Components/About'
import Support from './Components/Support'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import './style.css';
import { Routes, Route,  } from 'react-router-dom'
import { Grid } from '@mui/material'
import Chatbot from './Components/Chatbot'



const App = () => {  
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Chatbot/>
    </div>
    
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>     
    </Routes>
    </>
  )
}

export default App