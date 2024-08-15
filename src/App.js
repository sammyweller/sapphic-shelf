import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainView from './components/main-view/main-view';
import AllBooks from './components/all-books/all-books';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function BookApp() {
  return (
    <Router>
      <Container>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/all-books">All Books</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/all-books" element={<AllBooks />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default BookApp;