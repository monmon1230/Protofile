import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 استدعاء Framer Motion

const CardCom = ({ img, Title, to }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}   // 👈 هنا الكارد هيكبر 5% عن حجمه
      transition={{ type: "spring", stiffness: 100 }} // 👈 حركة ناعمة
    >
      <Card className="h-100 shadow-lg rounded-lg overflow-hidden">
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
            <Link to={to}>
              <Button variant="primary">Learn more</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CardCom;
