import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ activeLink, handleClick }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "projects", path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-white
    h-[60px]">
      
      <div className="max-w-7xl text-l text-bold mx-auto flex justify-between items-center px-6 h-full">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleClick("home")}
        className={`text-xl font-bold tracking-wide transition !no-underline
  ${
    activeLink === "home"
      ? "text-xxl font-bold text-purple-900"
      : "text-purple-300 font-bold hover:text-white"
  }`}
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleClick(link.name)}
              className={`transition duration-300 capitalize !no-underline
                ${
                  activeLink === link.name
                    ? "text-purple font-semibold"
                    : "text-white/70 hover:text-purple-300"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl bg-purple-900 text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed top-0 right-0 h-full w-64 
            bg-black/70 backdrop-blur-xl 
            border-l border-white/10 
            flex flex-col gap-6 p-6 items-center"
          >
            <button
              className="self-end text-white text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  handleClick(link.name);
                  setOpen(false);
                }}
                className={`capitalize transition !no-underline
                  ${
                    activeLink === link.name
                      ? "text-yellow-400 font-semibold"
                      : "text-white/70 hover:text-purple-300"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;