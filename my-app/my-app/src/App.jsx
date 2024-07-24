import { useState } from 'react'
import './App.css'
import Register from './Register'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from './Login';
import Profile from './Profile';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
