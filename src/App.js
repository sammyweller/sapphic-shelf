import React from 'react';
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

  return (
    <Router>
      <Container className="main-container">
      <Navbar bg="white" expand="lg" className="main-navbar"  style={{ 
        margin: 'auto',
        background: 'white',
        padding: '20px 40px',
        fontFamily: '"Outfit", sans-serif;'
         }}>
      <Navbar.Brand className="navbar-brand" href="/" style={{ 
          fontSize: '38px',
          fontWeight: '800',
          color: '#212529'
         }}>Sapphic <span>Shelf</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-list">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link" href="/">Home</Nav.Link>
          <Nav.Link className="nav-link" href="/about-us">About</Nav.Link>
          <Nav.Link className="nav-link" href="/contact-form">Contact</Nav.Link>
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