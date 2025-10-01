import React, { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/Pages/HomePage'
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router'
import { Container } from 'react-bootstrap'
import AboutPage from './Components/HomePage/Pages/AboutPage'
import Contactme from './Components/HomePage/Pages/Contactme'
import NavBar from './Components/HomePage/NavBar'
import Projects from './Components/HomePage/Pages/Projects'
import { Dimentions } from './constants/dimensions'



function App() {

     const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };


  return (
   <div className=' w-screen h-screen  p-2  bg-gradient-to-br from-blue-900 via-black to-red-900'>
  
<BrowserRouter basename="/Protofile/">
  <NavBar activeLink={activeLink} handleClick={handleClick} />
  <div className={`mt-[${Dimentions.navHeight}]`}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contactme />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </div>
</BrowserRouter>
</div>

  )
}

export default App
