import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainView from './components/main-view/main-view';
import BookView from './components/book-view/book-view'; 
import AboutUs from './components/about-us/about-us';
import ContactForm from './components/contact-form/contact-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function BookApp() {
  return (
    <Router>
      <Container>
        <nav>
        <a className="nav-logo" href="/"><span>Sapphic</span> Shelf</a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About</a></li>
            <li><a href="/contact-form">Contact</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/book/:id" element={<BookView />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-form" element={<ContactForm/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default BookApp;