// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
import Feed from './Feed';
function App() {
  return (
    <>
     <Provider store={appStore}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Body/>}>
    <Route path='/' element={<Feed/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/profile" element = {<Profile/>}/>
    
    </Route>
  </Routes>
  
  </BrowserRouter>
  </Provider>
    </>
  )
}

export default App;

