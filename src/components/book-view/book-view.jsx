import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books.json';
import './book-view.css';

function BookView() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find(book => book.id === parseInt(id)); // Find the book by ID

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-view">
      <div className="book-view-details">
        <h1>{book.title}</h1>
        <p>By: {book.authors.join(', ')}</p>
        <p>Genres: {book.genres.join(', ')}</p>
        <p className="book-view-description">{book.description}</p>
        <div className="buy-book">
          <a href={book.amazon} target="_blank" rel="noopener noreferrer" className="button">
            Buy on Amazon
          </a>
          <span>or</span>
          <a href={"https://bookshop.org/pages/bookstores"} target="_blank" rel="noopener noreferrer" className="">
            Find a local book store
          </a>
        </div>
      </div>
      <div className="book-view-cover">
        <img src={book.imageUrl} alt={`${book.title} cover`} />
      </div>
    </div>
  );
}

export default BookView;