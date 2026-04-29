import React from 'react'
import { Link } from "react-router-dom";

const ProfileButtons = () => {return(
<div className="mt-6 flex flex-wrap gap-3 justify-center">
    <Link to="/projects">
      <button className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition duration-300">
        View Projects
      </button>
    </Link>
    <Link to="/contact">
      <button className="px-6 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition duration-300">
        Contact Me
      </button>
    </Link>
  </div>)  }



export default ProfileButtons