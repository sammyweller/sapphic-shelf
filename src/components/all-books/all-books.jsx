import React from 'react';
import books from '../../data/books.json';
import BookCard from '../book-card/book-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './all-books.css'; 



function AllBooks() {
    // Filter the books by genre
    const fantasyBooks = books.filter(book => book.genres.includes("Fantasy"));
    const horrorBooks = books.filter(book => book.genres.includes("Horror"));
    const romanceBooks = books.filter(book => book.genres.includes("Romance"));
    const sciFiBooks = books.filter(book => book.genres.includes("Science Fiction"));
    const spicyBooks = books.filter(book => book.genres.includes("Spicy"));


  
    return (
      <div className="all-books">
        <p>
            Skip to...
            <a href="#fantasy-section">Fantasy</a>
            <a href="#romance-section">Romance</a>
            <a href="#horror-section">Horror</a>
            <a href="#scifi-section">Science Fiction</a>
            <a href="#spicy-section">Spicy</a>
        </p>

        <section className="" id="fantasy-section">
            <h2>Fantasy Books</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {fantasyBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                <BookCard book={book} />
                </Col>
            ))}
            </Row>
        </section>

        <section className="" id="romance-section">
            <h2>Romance Books</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {romanceBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                <BookCard book={book} />
                </Col>
            ))}
            </Row>
        </section>

        <section className="" id="horror-section">
            <h2>Horror Books</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {horrorBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                <BookCard book={book} />
                </Col>
            ))}
            </Row>
        </section>

        <section className="" id="scifi-section">
            <h2>Science Fiction Books</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {sciFiBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                <BookCard book={book} />
                </Col>
            ))}
            </Row>
        </section>

        <section className="" id="spicy-section">
            <h2>Spicy Books</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {spicyBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                <BookCard book={book} />
                </Col>
            ))}
            </Row>
        </section>

      </div>
    );
  }

export default AllBooks;