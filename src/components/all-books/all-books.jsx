import React, { useState } from 'react';
import books from '../../data/books.json';
import BookCard from '../book-card/book-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './all-books.css';

function AllBooks() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const genres = [
    'Fantasy', 
    'Romance', 
    'Horror', 
    'Dystopian', 
    'Science Fiction', 
    'Spicy',
    'Contemporary',
    'Historical Fiction',
    'All'

  ];

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    if (genre === 'All') {
      setSelectedGenres(['All']); 
    } else {
      if (selectedGenres.includes('All')) {
        setSelectedGenres([genre]);  
      } else if (e.target.checked) {
        setSelectedGenres([...selectedGenres, genre]);
      } else {
        setSelectedGenres(selectedGenres.filter(g => g !== genre));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (selectedGenres.includes('All') || selectedGenres.length === 0) {
      setFilteredBooks(books);  
    } else {
      const filtered = books.filter(book => 
        selectedGenres.every(genre => book.genres.includes(genre))
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className="all-books">
      {/* Genre Selection */}
      <h2>Let's explore some books.</h2>
      <form onSubmit={handleSubmit} className="genre-selection">
        <div className="form-options">
            {genres.map((genre) => (
            <div key={genre} className="genre-checkbox">
                <input 
                type="checkbox" 
                id={genre} 
                value={genre} 
                checked={selectedGenres.includes(genre)}
                onChange={handleGenreChange}
                />
                <label htmlFor={genre}>{genre}</label>
          </div>
        ))}
        </div>
        <button type="submit">Show Books</button>
      </form>

      {/* Conditional Rendering Based on Filtered Books and Submission */}
      {submitted ? (
        filteredBooks.length > 0 ? (
          <section className="filtered-books">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center custom-row-gap">
              {filteredBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                  <BookCard book={book} />
                </Col>
              ))}
            </Row>
          </section>
        ) : (
          <p>Hmm... looks like we can't find any books. Consider choosing fewer genres and try again.</p>
        )
      ) : (
        <p>Select your favorite genres and click "Show Books" to see the results.</p>
      )}
    </div>
  );
}

export default AllBooks;
