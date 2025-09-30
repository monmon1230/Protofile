import React from 'react'
import { motion } from "framer-motion";
import ContactmeCom from '../../Contactme/ContactmeCom'

const Contactme = () => {
  return (
    <div className='h-screen w-screen overflow-auto flex justify-center'>
 <motion.div
  className="flex items-center m-5"
  initial={{ scale: -5, opacity: 0, rotate: 180 }}
  animate={{ scale: 1, rotate: 360, opacity: 100 }}
  transition={{ duration: 4, ease: "easeInOut" }}
>
  <ContactmeCom />
</motion.div>
</div>
  )
}

export default Contactme;
