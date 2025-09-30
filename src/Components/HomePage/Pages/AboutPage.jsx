import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../Images/mon.jpg";
import { motion } from "framer-motion";
import AboutCom from "../../AboutPage/AboutCom";



const AboutPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto flex items-start bg-gradient-to-br from-blue-900 via-black to-red-900 justify-center ">
      <Container className="mt-10 pt-4 flex flex-col justify-center">
     <Row className=" flex justify-center items-center">
  <Col xs={12} className="flex flex-col md:flex-row items-center justify-center gap-4">
    <motion.img
      src={img}
      alt="not found"
      className="h-40 w-40  border-2 flex justify-center border-white rounded-full object-cover shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 4 }}
    />
    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-white text-xl md:text-2xl font-bold">Mina Magdy</h1>
      <p className="text-white text-sm md:text-base">Frontend Developer | React</p>
    </motion.div>
  </Col>
</Row>
        <Row className="flex justify-center items-center mt-4">
          <Col className="flex justify-center  ">
            <AboutCom />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
