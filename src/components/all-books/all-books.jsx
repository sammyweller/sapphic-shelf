import React, { useState } from 'react';
import books from '../../data/books.json';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from '../book-card/book-card';
import './all-books.css'; 

function AllBooks() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = [
    'All', 
    'Horror', 
    'Romance', 
    'Science Fiction', 
    'Fantasy', 
    'Historical Fiction', 
    'Dystopian', 
    'Contemporary', 
    'Literary Fiction', 
    'Space Opera', 
    'Spicy'
  ];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredBooks = selectedGenre === 'All' 
    ? books 
    : books.filter(book => book.genres.includes(selectedGenre));

  return (
    <section id="all-books-section" className="all-books">
      <h2>All Books by Author Last Name</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select id="genre-select" onChange={handleGenreChange} value={selectedGenre}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Books List */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
        {filteredBooks.map((book) => (
          <Col key={book.id} className="d-flex justify-content-center align-items-center">
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default AllBooks;