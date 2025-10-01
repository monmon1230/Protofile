import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ activeLink, handleClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 fixed top-0 left-0 z-50 h-[60px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500 !no-underline">
          <Link to="/" onClick={() => handleClick("home")}>MyPortfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center justify-center">
          <Link to="/about" onClick={() => handleClick("about")}
            className={`px-2 transition duration-300 !no-underline ${
              activeLink === "about" ? "text-red-500 font-bold" : "text-red-500 hover:text-black"
            }`}>
            About
          </Link>

          <Link to="/contact" onClick={() => handleClick("contact")}
            className={`px-2 transition duration-300 !no-underline ${
              activeLink === "contact" ? "text-red-500 font-bold" : "text-red-500 hover:text-black"
            }`}>
            Contact
          </Link>

          <Link to="/projects" onClick={() => handleClick("projects")}
            className={`px-2 transition duration-300 !no-underline ${
              activeLink === "projects" ? "text-red-500 font-bold" : "text-red-500 hover:text-black"
            }`}>
            Projects
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-2xl text-red-500" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6 z-50 items-center"
          >
            <button className="self-end text-xl text-red-500 mb-6" onClick={() => setOpen(false)}>✕</button>

            <Link to="/about" onClick={() => { handleClick("about"); setOpen(false); }}
              className={`transition duration-300 ${activeLink === "about" ? "text-red-500 font-bold" : "text-black hover:text-red-400"}`}>
              About
            </Link>

            <Link to="/contact" onClick={() => { handleClick("contact"); setOpen(false); }}
              className={`transition duration-300 ${activeLink === "contact" ? "text-red-500 font-bold" : "text-black hover:text-red-400"}`}>
              Contact
            </Link>

            <Link to="/projects" onClick={() => { handleClick("projects"); setOpen(false); }}
              className={`transition duration-300 ${activeLink === "projects" ? "text-red-500 font-bold" : "text-black hover:text-red-400"}`}>
              Projects
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
