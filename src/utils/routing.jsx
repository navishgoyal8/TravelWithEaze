import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/loginPage';
import SignupPage from '../pages/signupPage';

function Routing() {
    return (
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
  
    )
  }
  
  export default Routing;