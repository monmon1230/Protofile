import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactmeCom = () => {
  // فانكشن ارسال البيانات مع EmailJS
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgaewu7",   // من EmailJS
        "template_nsqxe73",  // من EmailJS
        e.target,
        "Px4TsS93OGrqoNUwi"       // من EmailJS (Public Key)
      )
      .then(
        (result) => {
         
          alert("✅ Message sent successfully!", result.text);
        },
        (error) => {
          
          alert("❌ Failed to send message.", error.text);
        }
      );

    e.target.reset(); // يمسح الفورم بعد الإرسال
  }

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center bg-gradient"
    >
      <Row className="bg-white rounded-4 shadow p-4 w-50">
        {/* Left Side */}
        <Col md={6} className="d-flex flex-column justify-content-center gap-3">
          <h2 className="fw-bold text-primary">Contact Me</h2>
          <p className="text-muted">
            Let’s work together! Fill the form or reach me on social media.
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            {["primary", "dark", "danger"].map((color, idx) => (
              <div
                key={idx}
                className={`bg-${color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                style={{ width: "3rem", height: "3rem" }}
              >
                {idx === 0 ? "in" : idx === 1 ? "GH" : "✉"}
              </div>
            ))}
          </div>

          <p>📍 Ismailia</p>
          <p>📧 email@example.com</p>
          <p>📞 +123 456789</p>
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <form className="d-flex flex-column gap-3" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-control"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactmeCom;
