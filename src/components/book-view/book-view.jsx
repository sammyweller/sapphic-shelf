import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books.json';
import BookCard from '../book-card/book-card';
import './book-view.css';

function BookView() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find(book => book.id === parseInt(id)); // Find the book by ID

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  if (!book) {
    return <div>Book not found</div>;
  }

  const otherBooksInSeries = book.seriesId
    ? books.filter(b => b.seriesId === book.seriesId && b.id !== book.id)
    : [];

  return (
    <div className="book-view">
      <div>
        <h1>{book.title}</h1>
        <p>By: {book.authors.join(', ')}</p>
      </div>

      <div className="book-view-top">
        <div className="book-view-details">
          {book.seriesId && book.seriesPosition && (
            <p className="series-info">
              #{book.seriesPosition} in the {book.series} series
            </p>
          )}
          <div className="book-view-description">
            {book.description
              ? book.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
              : <p>No description available.</p>  /* Fallback if description is undefined */
            }
          </div>
          <p className="book-view-genres">
            <span className="genre-bubbles">
              For fans of:
              {book.genres.map((genre, index) => (
                <span key={index} className="genre-bubble">{genre}</span>
              ))}
            </span>
          </p>
          <div className="buy-book">
            <a href={book.amazon} target="_blank" rel="noopener noreferrer" className="button">
              Buy on Amazon
            </a>
            <span>or</span>
            <a href={"https://bookshop.org/pages/bookstores"} target="_blank" rel="noopener noreferrer" className="local-bookstore">
              Find a local book store
            </a>
          </div>
        </div>
        <div className="book-view-cover">
          <img src={book.imageUrl} alt={`${book.title} cover`} />
        </div>
      </div>

      {/* Series Section with BookCard Components */}
      {book.seriesId && otherBooksInSeries.length > 0 && (
        <div className="series-section">
          <h2>Other books in the {book.series} series:</h2>
          <ul className="series-books-list">
            {otherBooksInSeries
              .sort((a, b) => a.seriesPosition - b.seriesPosition) // Sort by series position
              .map(seriesBook => (
                <li key={seriesBook.id}>
                  <BookCard book={seriesBook} />
                </li>
              ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default BookView;
