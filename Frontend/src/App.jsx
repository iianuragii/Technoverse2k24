import React from 'react'
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import About from './Components/About'
import Faq from './Components/Faq'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>    
    </Routes>
    </>
  )
}

export default App