import React, { useState } from "react"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import mon from'../../Images/mon2.jpg'


const NavBar = () => {
  // 🔴 state علشان نخزن اللينك النشط
  const [activeLink, setActiveLink] = useState("")

  // دالة تغيير اللينك النشط
  const handleClick = (linkName) => {
    setActiveLink(linkName)
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* اللوجو */}
          <Link to="/" className="d-flex justify-around cursor-pointer !no-underline">
            <div className="text-xl font-bold cursor-pointer !no-underline text-red-500">My protofile</div>
            <div>
              <img
                className="w-10 h-10 border-2 border-blue-800 rounded-full"
                src={mon}
                alt="notFound"
              />
            </div>
          </Link>

          <div className="ms-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex justify-content-around w-400" style={{ maxWidth: "300px" }}>
                
                <Link
                  to="/about"
                  onClick={() => handleClick("about")}
                  className={`px-2 no-underline ${
                    activeLink === "about" ? "!text-red-500 font-bold !no-underline" : "text-black !no-underline"
                  }`}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => handleClick("contact")}
                  className={`px-2 no-underline ${
                    activeLink === "contact" ? "!text-red-500 font-bold !no-underline" : "text-black !no-underline"
                  }`}
                >
                  Contact
                </Link>

                <Link
                  to="/projects"
                  onClick={() => handleClick("projects")}
                  className={`px-2 !no-underline ${
                    activeLink === "projects" ? "!text-red-500 font-bold !no-underline" : "text-black !no-underline"
                  }`}
                >
                  Projects
                </Link>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
