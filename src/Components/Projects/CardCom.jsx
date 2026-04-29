import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const CardCom = ({ img, Title, to }) => {
  return (
   
    <motion.div
      whileHover={{ scale: 1.08 }}   
      transition={{ type: "spring", stiffness: 100 }} 
    >
      <Card className="h-100 shadow-lg rounded-lg ">
        <Card.Img
          variant="top"
          className="img-fluid object-cover"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          src={img}
          alt={Title}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-center mb-3">{Title}</Card.Title>
          <div className="text-center">
            <Link to={to} className=" flex justify-around">
              <Button variant="primary" className=" flex justify-around">GitHub </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  
  );
};

export default CardCom;
