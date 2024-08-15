import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books.json';

function BookView() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find(book => book.id === parseInt(id)); // Find the book by ID

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.authors.join(', ')}</p>
      <p>Genres: {book.genres.join(', ')}</p>
      <p>Description: {book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default BookView;