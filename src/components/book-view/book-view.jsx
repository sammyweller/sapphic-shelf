import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books.json';
import BookCard from '../book-card/book-card';
import { FaSkull, FaHeart, FaSpaceShuttle, FaBook, FaFeather, FaBiohazard, FaPepperHot, FaDragon, FaCity, FaStar, FaSnowflake, FaClock, FaFootballBall } from 'react-icons/fa';
import './book-view.css';

const genreIcons = {
  "Horror": <FaSkull />,
  "Romance": <FaHeart />,
  "Science Fiction": <FaSpaceShuttle />,
  "Fantasy": <FaDragon />,
  "Historical Fiction": <FaFeather />,
  "Dystopian": <FaBiohazard />,
  "Contemporary": <FaCity />,
  "Literary Fiction": <FaBook />,
  "Space Opera": <FaStar />,
  "Spicy": <FaPepperHot />,
  "Holiday": <FaSnowflake />,
  "Time Travel": <FaClock />,
  "Sports": <FaFootballBall />
};

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
            <p className="book-view-genres">
              <span className="genre-bubbles">
                For fans of:
                {book.genres.map((genre, index) => (
                  <span key={index} className="genre-bubble">
                    {genreIcons[genre]} {/* Display the icon */}
                    {genre} {/* Display the genre name */}
                  </span>
                ))}
              </span>
            </p>
            {book.description
              ? book.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
              : <p>No description available.</p>  /* Fallback if description is undefined */
            }
          </div>
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
