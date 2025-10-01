import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../Images/mon.jpg";

const ImageCom = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
  
      const x = e.clientX - rect.left; // موقع الماوس داخل العنصر
      const y = e.clientY - rect.top;
  
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const deltaX = x - centerX;
      const deltaY = y - centerY;
  
      setRotateY((deltaX / centerX) * 45);  // يمين/شمال
      setRotateX((-deltaY / centerY) * 45); // فوق/تحت
    };
  
    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };
  
  return (
    <Container className="flex flex-wrap flex-col items-center justify-center mt-10 text-center">
      {/* الصورة */}
      <motion.img
        src={img}
        alt="not found"
        className="h-40 w-40 md:h-60 md:w-60 border-4 border-white   rounded-full object-cover shadow-lg p-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1,rotateX: rotateX,rotateY:rotateY }}
        transition={{ duration: 5,type: "spring", stiffness: 300, damping: 20  }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      
      />

      {/* النص */}
      <motion.div
        className="mt-8"
        initial={{ y: -50, opacity: 0, scale:0 }}
        animate={{ y: 0, opacity: 1, scale:1 }}
        transition={{ duration: 5, delay: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white">Hi, I'm</h1>
        <h2 className=" text-blue-900 text-4xl font-extrabold  mt-2">
          Mina Magdy
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          A passionate web developer who loves building modern, responsive, and
          user-friendly applications.
        </p>

        {/* الأزرار */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center  mb-4">
          <Link to="/projects">
            <Button className="px-4 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              View Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="light" className="px-4 py-2 text-lg bg-gray-800 hover:bg-gray-300 text-black shadow-md">
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};

export default ImageCom;
