import React from "react";
import { color, motion } from "framer-motion";
import Box from "./Box";
import graduate from "../../Images/graduate.png";
import bagoftools from "../../Images/bagoftools.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import cv from "../../assets/MinaMagdy.pdf";

const AboutCom = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 2 }}
      className="w-full max-w-2xl  
                bg-gradient-to-br from-blue-50 to-white 
                border-blue-900 border-2 
                rounded-3xl shadow-lg 
                p-4 flex flex-col items-center"
    >
      <motion.div
        className="w-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            About Me
          </h2>

        </div>

        {/* البوكسات */}
        <div className="flex flex-wrap justify-around gap-8 mt-4">
          <motion.div
           
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Box
              src={graduate}
              style="bg-blue-200 w-28 h-20 md:w-32 md:h-24 rounded-lg flex flex-col items-center justify-center shadow-md p-2"
              title="Engineering"
            />
          </motion.div>
          <motion.div
           
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Box
              src={bagoftools}
              style="bg-red-200 w-28 h-20 md:w-32 md:h-24 rounded-lg flex flex-col items-center justify-center shadow-md p-2 "
              title="FrontEnd"
            />
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-2">
          <h3 className="text-blue-900 font-semibold mb-2 text-lg">Skills :</h3>
          <div className="flex flex-wrap justify-center-safe gap-4">
            {[
              { name: "React", color: "bg-blue-500" },
              { name: "TailwindCSS", color: "bg-cyan-500" },
              { name: "HTML", color: "bg-orange-400" },
              { name: "JavaScript", color: "bg-yellow-400" },
              { name: "Redux-toolkit", color: "bg-green-400" },
              { name: "bootstrap", color: "bg-orange-300" },
            ].map((skill, i) => (
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.5 }} // 👈 هنا الكارد هيكبر 5% عن حجمه
                transition={{ type: "spring", stiffness: 100 }}
              >
                <span
                  key={i}
                  className={`${skill.color} text-white px-4 py-2 rounded-full text-xs font-medium shadow-md`}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {/* <a href="/MinaMagdy.pdf" download="/MinaMagdy.pdf"> */}
          <a href={cv} download="MinaMagdy.pdf">
            <Button variant="dark">Download cv</Button>
          </a>

          <Link to="/contact">
            <Button variant="primary" className="px-4 py-2 text-sm">
              Contact
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCom;
