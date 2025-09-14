import React from 'react'
import { motion } from "framer-motion";
import { Container } from 'react-bootstrap'
import ContactmeCom from '../../Contactme/ContactmeCom'

const Contactme = () => {
  return (
    
      <motion.div
   
  initial={{ scale: 0  , opacity:0, rotate:180 }}
  animate={{ scale: 1, rotate: 360 , opacity:1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
>
        
            <ContactmeCom/>
</motion.div>
    
  )
}

export default Contactme