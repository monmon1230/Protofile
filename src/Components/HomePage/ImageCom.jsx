import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../Images/mon.jpg";

const ImageCom = () => {
  return (
    <Container className="flex flex-col items-center justify-center mt-10 text-center">
      {/* الصورة */}
      <motion.img
        src={img}
        alt="not found"
        className="h-60 w-60 md:h-80 md:w-80 border-4 border-r-blue-800  rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      />

      {/* النص */}
      <motion.div
        className="mt-8"
        initial={{ y: -50, opacity: 0, scale:0 }}
        animate={{ y: 0, opacity: 1, scale:1 }}
        transition={{ duration: 5, delay: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-black">Hi, I'm</h1>
        <h2 className=" text-blue-900 text-4xl font-extrabold  mt-2">
          Mina Magdy
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          A passionate web developer who loves building modern, responsive, and
          user-friendly applications.
        </p>

        {/* الأزرار */}
        <div className="mt-4 flex gap-4 justify-center">
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
