import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/HomePage/NavBar";
import HomePage from "./Components/HomePage/Pages/HomePage";
import AboutPage from "./Components/HomePage/Pages/AboutPage";
import Contactme from "./Components/HomePage/Pages/Contactme";
import Projects from "./Components/HomePage/Pages/Projects";
import { Dimentions } from "./constants/dimensions";
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => setActiveLink(link);

  return (
    <div className="w-screen h-screen p-2 bg-gradient-to-br from-blue-900 via-black to-red-900">
      <BrowserRouter basename="/Protofile">
        <NavBar activeLink={activeLink} handleClick={handleClick} />
        <div className={`mt-[${Dimentions.navHeight}]`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Protofile/about" element={<AboutPage />} />
            <Route path="/Protofile/contact" element={<Contactme />} />
            <Route path="/Protofile/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
