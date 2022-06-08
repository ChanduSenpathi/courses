import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Navbar from './components/Navbar'
import './App.css'
import Form from './components/Form'
import Userdetails from './components/Userdetails'
export default function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Courses/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/userdetails' element={<Userdetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}
