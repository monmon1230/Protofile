import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import mon from "../../../Images/mon2.jpg";
import SmartBrain from "../../../Images/SmartBrain.jpeg";
import CardCom from "../../Projects/CardCom";
import Graduation from "../../../Images/Graduation.jpeg";
import Movies from "../../../Images/Movies.jpeg";
import { motion } from "framer-motion";

const Projects = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    setRotateY((deltaX / centerX) * 45); // يمين/شمال
    setRotateX((-deltaY / centerY) * 45); // فوق/تحت
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className=" overflow-auto h-screen w-screen">
      <Container className="py-5 flex-wrap ">
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5 }}
        >
          <Row className="flex flex-wrap justify-center mt-3">
            {/* الصورة */}
            <Col xs={12} md={2} className="flex justify-center mt-3">
              <motion.img
                src={mon}
                alt="Tilt"
                className="h-40 rounded-lg shadow-xxl cursor-pointer border-2 border-white"
                style={{ perspective: 8000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Col>

            {/* النص */}
            <Col xs={12} md={8} className=" flex flex-wrap justify-start text-white text-center md:text-left">
              <h1 className="text-4xl md:text-6xl mt-4">Mina Magdy</h1>
              <p className=" flex flex-wrap text-start">
                I am a frontend developer with a passion for creating beautiful
                and user-friendly web applications. I have a strong background
                in React and Bootstrap, and I love learning new technologies and
                improving my skills.
              </p>
            </Col>
          </Row>
        </motion.div>

        {/* Projects Title */}
        <Row className="flex flex-wrap justify-center">
          <h2 className="flex flex-wrap justify-center text-white mt-2">
            Projects
          </h2>
        </Row>

        {/* Projects Cards */}
<Row className="flex flex-wrap justify-content-center m-3 pb-5">
  <Col xs={12} md={6} lg={4} className="mb-4">
    <CardCom
      img={SmartBrain}
      Title="SmartBrain"
      to="https://github.com/monmon1230/smartbrain"
    />
  </Col>
  <Col xs={12} md={6} lg={4} className="mb-4">
    <CardCom
      img={Graduation}
      Title="Graduation project"
      to="https://github.com/monmon1230/loginupdate"
    />
  </Col>
  <Col xs={12} md={6} lg={4} className="mb-4">
    <CardCom
      img={Movies}
      Title="Movie-List"
      to="https://github.com/monmon1230/my-movie"
    />
  </Col>
</Row>
      </Container>
    </div>
  );
};

export default Projects;