import React from 'react'
import { motion } from 'framer-motion';
const ProfileText = () => { 
    return (   
         <motion.div
    className="mt-8 text-center"
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h1 className="text-3xl font-bold text-white">Mina Magdy</h1>
    <p className="mt-3 text-purple-400 max-w-xl mx-auto">
      A passionate web developer who loves building modern, responsive, and user-friendly applications.
    </p>
  </motion.div>)

}

export default ProfileText;