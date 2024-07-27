import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Upload from "../../artifacts/contracts/Upload.sol/Upload.json"
import FileUpload from './Components/FileUpload'
import Modal from "./Components/Modal"
import { ethers } from "ethers";
import Support from './Components/Support'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import './style.css';
import { Routes, Route,  } from 'react-router-dom'
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
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/sign-up' element={<Signup/>}/>     
    </Routes>
    </>
  )
}

export default App