import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import mon from '../../../Images/mon2.jpg'
import SmartBrain from '../../../Images/SmartBrain.jpeg'
import CardCom from '../../Projects/CardCom'
import Graduation from '../../../Images/Graduation.jpeg'
import Movies from '../../../Images/Movies.jpeg'
import { motion } from "framer-motion"; 

const Projects = () => {
  return (
    <div>
      <Container>
        {/* Profile Section */}
        <motion.div initial={{ scale: .5 }} animate={{ scale: 1 }} transition={{ duration: 5 }}>
          <Row className='flex flex-wrap justify-center mt-4'>
            {/* الصورة */}
            <Col xs={12} md={4} className="flex justify-center mb-3">   
              <img 
                className='w-48 h-48 rounded-full border-white border-10 object-cover p-2' 
                src={mon} 
                alt='Not Found' 
              /> 
            </Col>
            {/* النص */}
            <Col xs={12} md={8} className='text-white text-center md:text-left'>
              <h1 className='text-4xl md:text-6xl mt-2'>Mina Magdy</h1>
              <p>
                I am a frontend developer with a passion for creating beautiful and 
                user-friendly web applications. I have a strong background in React 
                and Bootstrap, and I love learning new technologies and improving my skills.
              </p>
            </Col>
          </Row>
        </motion.div>

        {/* Projects Title */}
        <Row>
          <h2 className='flex flex-wrap justify-center text-white mt-2'>Projects</h2>
        </Row>

        {/* Projects Cards */}
        <Row className="mt-2">
          <Col xs={12} md={4} className="mb-4">
            <CardCom img={SmartBrain} Title="SmartBrain" to="https://github.com/monmon1230/smartbrain" />
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <CardCom img={Graduation} Title="Graduation project" to="https://github.com/monmon1230/loginupdate" />
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <CardCom img={Movies} Title="Movie-List" to="https://github.com/monmon1230/my-movie" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
