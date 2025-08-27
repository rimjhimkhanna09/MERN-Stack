import React from 'react'
import './App.css';
import Contact from './Contact';
import About from './About';
import Feedback from './Feedback';
import {Link, Routes, Route} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

export default function App() {
  return (
    <>
    <div className='main'> 
      <div className='navbar'>
        <Link to="/"> Home </Link>
        <Link to="contact"> contact us  </Link>
        <Link to="about"> About us  </Link>
        <Link to="feedback"> Provide us feedback  </Link>
      </div>
      </div>

    <Routes>
      <Route path = "/" element = {<Home/>} ></Route>
      <Route path="/contact" element = {<Contact/>} > </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/feedback" element={<Feedback/>}> </Route>
      <Route path="*"  element={<NotFound/>}> </Route>
    </Routes>
    </>
  )
}
