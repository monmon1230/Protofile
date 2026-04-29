import React from 'react'
import { motion } from "framer-motion";
import ContactmeCom from '../../Contactme/ContactmeCom'

const Contactme = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto  flex justify-center'>
 <motion.div
  className="flex items-center m-5"
  initial={{ scale: -5, opacity: 0 }}
  animate={{ scale: 1,  opacity: 100 }}
  transition={{ duration: .5, ease: "easeInOut" }}
>
  <ContactmeCom />
</motion.div>
</div>
  )
}

export default Contactme;
