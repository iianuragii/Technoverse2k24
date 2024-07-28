import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthContext'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Support';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Chatbot from './Components/Chatbot';
import './style.css';

const App = () => {
  return (
    <AuthProvider>
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
          <Route path='/login' element={<Login/>}/>     
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;
