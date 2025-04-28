// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Body/>}>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/profile" element = {<Profile/>}/>
    
    </Route>
  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App;

