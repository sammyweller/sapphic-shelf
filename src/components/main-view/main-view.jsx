import React from 'react';
import books from '../../data/books.json';
import BookCard from '../book-card/book-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink as Link } from 'react-router-hash-link';


import './main-view.css'; 

function MainView() {
  // Shuffle an array and return the first 3 items
  const getRandomBooks = (bookArray) => {
    return bookArray
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  };

  // Filter books by genre and select 3 random books
  const fantasyBooks = getRandomBooks(books.filter(book => book.genres.includes("Fantasy")));
  const horrorBooks = getRandomBooks(books.filter(book => book.genres.includes("Horror")));
  const romanceBooks = getRandomBooks(books.filter(book => book.genres.includes("Romance")));
  const scienceFictionBooks = getRandomBooks(books.filter(book => book.genres.includes("Science Fiction")));
  const spicyBooks = getRandomBooks(books.filter(book => book.genres.includes("Spicy")));

  return (
    <div className="mainview-div">
      <section className="header">
        <h1><span>Sapphic</span> Shelf</h1>
        <p>A sapphic book for every mood.</p>
        <Link to="/all-books">
          View all books
        </Link>
      </section> 
      
      {/* Fantasy Section */}
      <section className="book-list">
        <h2>Fantasy</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {fantasyBooks.map((book) => (
            <Col key={book.id} className="d-flex justify-content-center align-items-center">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        <Link to="/all-books#fantasy-section">
          View all Fantasy Books
        </Link>
      </section>

      {/* Horror Section */}
      <section className="book-list">
        <h2>Horror</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {horrorBooks.map((book) => (
            <Col key={book.id} className="d-flex justify-content-center align-items-center">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        <Link to="/all-books#horror-section">
          View all Horror Books
        </Link>
      </section>

      {/* Romance Section */}
      <section className="book-list">
        <h2>Romance</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {romanceBooks.map((book) => (
            <Col key={book.id} className="d-flex justify-content-center align-items-center">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        <Link to="/all-books#romance-section">
          View all Romance Books
        </Link>
      </section>

      {/* Science Fiction Section */}
      <section className="book-list">
        <h2>Science Fiction</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {scienceFictionBooks.map((book) => (
            <Col key={book.id} className="d-flex justify-content-center align-items-center">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        <Link to="/all-books#scifi-section">
          View all Science Fiction Books
        </Link>
      </section>

      {/* Spicy Section */}
      <section className="book-list">
        <h2>Spicy</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {spicyBooks.map((book) => (
            <Col key={book.id} className="d-flex justify-content-center align-items-center">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        <Link to="/all-books#spicy-section">
          View all Spicy Books
        </Link>
      </section>

    </div>
  );
}

export default MainView;
