import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dimentions } from '../../constants/dimensions';

const NavBar = ({ activeLink, handleClick }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className={`w-full bg-white shadow-md px-6 py-3 fixed top-0 left-0 z-50 h-[${Dimentions.navHeight}]`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500 !no-underline "> <Link to='/'>MyPortfolio</Link></div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleClick(link.label.toLowerCase())}
              className={`px-2 transition duration-300 !no-underline ${
                activeLink === link.label.toLowerCase()
                  ? "text-red-500 font-bold"
                  : "text-black hover:text-red-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl text-red-500"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6 z-50"
          >
            <button
              className="self-end text-xl text-red-500 mb-6"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => {
                  handleClick(link.label.toLowerCase());
                  setOpen(false);
                }}
                className={`transition duration-300 ${
                  activeLink === link.label.toLowerCase()
                    ? "text-red-500 font-bold"
                    : "text-black hover:text-red-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
