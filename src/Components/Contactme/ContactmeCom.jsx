import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactmeCom = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgaewu7",   // Service ID
        "template_nsqxe73",  // Template ID
        e.target,
        "Px4TsS93OGrqoNUwi"  // Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "✅ Your message was sent successfully.",
            confirmButtonColor: "#16a34a",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.text,
          });
        }
      );

    e.target.reset();
  }

  return (
   <div className="w-screen bg-gradient-to-br from-blue-900 via-black to-red-900 flex flex-wrap overflow-y-auto h-[85vh] md:min-h-screen">
  <Container className="flex justify-center items-center mt-4">
    <Row className="bg-white rounded-4 shadow-lg p-3 mx-auto col-11 col-sm-12 col-md-6 col-lg-8">
      {/* Left Side */}
      <Col xs={11} md={6} className="d-flex flex-column justify-content-center ">
        <h2 className="fw-bold text-primary">Contact Me</h2>
        <p className="text-muted">
          Let’s work together! Fill the form or reach me on social media.
        </p>

        <p>📍 Ismailia</p>
        <p>📧 email@example.com</p>
        <p>📞 +123 456789</p>
      </Col>

      {/* Right Side */}
      <Col xs={11} md={6} className="my-2">
        <form className="d-flex flex-column gap-3" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" className="form-control" required />
          <input type="email" name="email" placeholder="Email" className="form-control" required />
          <input type="text" name="subject" placeholder="Subject" className="form-control" />
          <textarea rows="4" name="message" placeholder="Message" className="form-control" required></textarea>
          <Button type="submit" className="btn btn-primary w-100">
            Send Message
          </Button>
        </form>
      </Col>
    </Row>
  </Container>
</div>

  );
};

export default ContactmeCom;
