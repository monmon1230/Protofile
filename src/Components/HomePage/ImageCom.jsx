import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import img from "../../Images/mon.jpg";
import ProfileText from "./ProfileText";
import ProfileButtons from "./ProfileButtons";

// ================= IMAGE =================
const ProfileImage = ({ rotate }) => {
  return (
    <motion.div
      className="relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.img
        src={img}
        alt="profile"
        className="h-40 w-40 md:h-60 md:w-60 rounded-full object-cover 
        border border-white/20 shadow-2xl shadow-purple-500/30 p-1 backdrop-blur-md"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          translateZ: 60,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      />

      {/* Glare Effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none 
        bg-gradient-to-tr from-white/30 via-transparent to-transparent"
        animate={{
          opacity: 0.6,
          x: rotate.y * 2,
          y: rotate.x * 2,
        }}
      />
    </motion.div>
  );
};

// ================= MAIN COMPONENT =================
const ImageCom = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotate({
      x: (-y / (rect.height / 2)) * 18,
      y: (x / (rect.width / 2)) * 18,
    });
  };

  return (
    <Container className="flex flex-col items-center justify-center text-center mt-16">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 70, damping: 12 }}
        className="relative flex flex-col items-center text-center p-8 md:p-12 
        bg-white/5 backdrop-blur-xl 
       bg-gradient-to-br from-indigo-900 via-black to-purple-900 
        border border-white/10 
        rounded-3xl 
        shadow-[0_0_80px_rgba(168,85,247,0.3)] 
        gap-6
        [perspective:1000px]"
      >
        {/* Background glow */}
        <div className="absolute w-60 h-60 bg-purple-500/20 blur-3xl rounded-full" />

        {/* IMAGE */}
        <ProfileImage rotate={rotate} />

        {/* TEXT (depth layer) */}
        <div style={{ transform: "translateZ(30px)" }}>
          <ProfileText />
        </div>

        {/* BUTTONS (higher depth) */}
        <div style={{ transform: "translateZ(40px)" }}>
          <ProfileButtons />
        </div>
      </motion.div>
    </Container>
  );
};

export default ImageCom;