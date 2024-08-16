import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainView from './components/main-view/main-view';
import BookView from './components/book-view/book-view'; 
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
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/book/:id" element={<BookView />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default BookApp;