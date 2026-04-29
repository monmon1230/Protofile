import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputField from "./inputarea";

const ContactPage = ({ form, sendEmail, loading }) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-purple-900 pt-20 px-3">

      <Container>
        <Row className="bg-gradient-to-br from-indigo-900 via-black to-purple-900 backdrop-blur-lg border border-white/20 rounded-4 shadow-2xl shadow-black/40 p-4 md:p-5 mx-auto col-12 col-md-10 col-lg-8 hover:scale-[1.01] transition duration-300">

          {/* Left Side */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center mb-4 mb-md-0"
          >
            <h2 className="fw-bold text-white mb-3">
              Contact Me
            </h2>

            <p className="text-gray-300 mb-4">
              Let’s work together! Fill the form or reach me on social media.
            </p>

            <p className="text-gray-300">📍 Ismailia</p>
            <p className="text-gray-300">📧 email@example.com</p>
            <p className="text-gray-300">📞 +123 456 789</p>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex flex-column gap-3"
            >

              <InputField
                style='h-10 bg-white text-center'
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />

              <InputField
                style='h-10 bg-white text-center'
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />

              <InputField
                style='h-10 bg-white text-center'
                type="text"
                name="subject"
                placeholder="Subject"
              />

              <InputField
                style='h-30 bg-white text-center'
                textarea
                name="message"
                placeholder="Message"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-100 border-0 py-2 fw-bold text-white rounded-md"
                style={{
                  background:
                    "linear-gradient(to right, #3b82f6, #8b5cf6)",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>
          </Col>

        </Row>
      </Container>

    </div>
  );
};

export default ContactPage;