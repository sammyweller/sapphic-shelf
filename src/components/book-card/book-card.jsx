import React from 'react';
import { Link } from 'react-router-dom';
import { FaSkull, FaHeart, FaSpaceShuttle, FaBook, FaFeather, FaBiohazard, FaPepperHot, FaDragon, FaCity, FaStar, FaSnowflake, FaClock, FaFootballBall } from 'react-icons/fa';
import './book-card.css'; 

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

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card-link">
      <div className="book-card">
        <img src={book.imageUrl} alt={`${book.title} cover`} className="book-cover" />
        <div className="book-details">
          <div className="book-details-top">
            <h3>{book.title}</h3>
            <p>By: {book.authors.join(', ')}</p>
          </div>
          <div className="genres">
            {book.genres.map((genre) => (
              <span key={genre} className="genre-icon">
                {genreIcons[genre]}
                <span className="tooltip-text">{genre}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;