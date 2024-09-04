import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import MainView from './components/main-view/main-view';
import BookView from './components/book-view/book-view';
import AboutUs from './components/about-us/about-us';
import ContactForm from './components/contact-form/contact-form';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function BookApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Container className="main-container">
        <Navbar bg="white" expand="lg" className="main-navbar" style={{
          margin: 'auto',
          background: 'white',
          padding: '20px'
        }}>
          <Navbar.Brand className="navbar-brand-logo" href="/" style={{
            fontSize: '38px',
            fontWeight: '800',
            color: '#212529'
          }}>Sapphic <span>Shelf</span></Navbar.Brand>
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <span className="custom-icon">
              {/* Conditionally render the SVG based on the menu's open/closed state */}
              {isOpen ? (
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#212529" width="30" height="30">
                  {/* SVG for the 'X' or close icon */}
                  <path fill="#212529" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                  <path d="M5 7H19" stroke="#212529" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 12L19 12" stroke="#212529" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 17L19 17" stroke="#212529" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              )}
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-list">
            <Nav className="mr-auto">
              <Nav.Link className="navbar-link" href="/">Home</Nav.Link>
              <Nav.Link className="navbar-link" href="/about-us">About</Nav.Link>
              <Nav.Link className="navbar-link" href="/contact-form">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/book/:id" element={<BookView />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>


        <footer className="footer">
          <div className="main-footer">
            <div>
              <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </div>
            <div>
              <FaEnvelope />
            </div>
          </div>

        </footer>
      </Container>
    </Router>
  );
}

export default BookApp;