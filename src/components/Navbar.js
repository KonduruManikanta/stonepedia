import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import "../styles/Navbar.css";

const NavigationBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <div className='nav-bg-container d-flex flex-direction-row align-items-center'>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={handleSidebarToggle}>
            <FaBars size={24} />
          </div>
      
      {/* Top Navigation Bar */}
      <Navbar expand="lg" sticky="top" className="navigation-bar">
        <Container>
          {/* Company Logo */}
          <Navbar.Brand href="#">
            <img
              src="/images/logo.png" // Replace with the path to your logo
              alt="Company Logo"
              className="company-logo"
            />
          </Navbar.Brand>

        

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar (Offcanvas) */}
      <Offcanvas show={showSidebar} onHide={handleSidebarToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="/images/logo.png" // Replace with the path to your logo
              alt="Company Logo"
              className="sidebar-logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Your Trusted Global Stone Marketplace</h5>
          <p>
            At StonePedia, we are redefining the future. StonePedia is an award-winning platform simplifying the purchase of the world's finest stone through certified and verified quarry owners and stone processing units across the globe.
          </p>
          <Nav className="flex-column">
            <Nav.Link href="#best-seller">Best Seller</Nav.Link>
            <Nav.Link href="#exclusive">StonePedia Exclusive</Nav.Link>
            <Nav.Link href="#premium">Premium Stones</Nav.Link>
            <Nav.Link href="#category">Shop by Category</Nav.Link>
            <Nav.Link href="#partner">Partner with Us</Nav.Link>
            <Nav.Link href="#contact">Contact Info</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;
