import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search-bar.css'; 

function SearchBar({ books }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      setSuggestions(books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.authors.some(author => author.toLowerCase().includes(query.toLowerCase()))
      ));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (book) => {
    setSearchQuery('');
    setSuggestions([]);
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a book or author..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(book => (
            <li key={book.id} onClick={() => handleSuggestionClick(book)}>
              {book.title} by {book.authors.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;