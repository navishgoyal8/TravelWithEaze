// src/App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './utils/routing'
import TravelForm from './components/TravelForm';
import SignupPage from './pages/signupPage';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/loginPage';


function App() {
  return (

    <div>
        
        <Header />
        <Routing />
       
    </div>
      

  );
}


export default App;

