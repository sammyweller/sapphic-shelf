import React, { useState, useEffect } from 'react';
import AllBooks from '../all-books/all-books';
import FilterModal from '../filter-modal/filter-modal';
import booksData from '../../data/books.json'; 
import './main-view.css'; 

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

function MainView() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState(['All']);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

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
    if (e) e.preventDefault();
    setSubmitted(true);
    handleCloseModal();
    if (selectedGenres.includes('All') || selectedGenres.length === 0) {
      setFilteredBooks(shuffleArray(booksData));  // Shuffle all books if 'All' is selected or no genres are selected
    } else {
      const filtered = booksData.filter(book => 
        selectedGenres.every(genre => book.genres.includes(genre))
      );
      setFilteredBooks(shuffleArray(filtered));  // Shuffle filtered books
    }
  };

  useEffect(() => {
    setFilteredBooks(shuffleArray(booksData)); // Shuffle and show all books on initial load
    setSubmitted(true); // Automatically set the page as "submitted"
  }, []);

  return (
    <div className="mainview-div">
      <section className="header">
        <h1>A sapphic book for every mood.</h1>
        <p>We're on a mission to highlight and celebrate sapphic stories, bringing their powerful and diverse voices to the forefront <span className="header-span">where they deserve to be.</span></p>
        <button onClick={handleShowModal} className="button">
          Start filtering books
        </button>
      </section> 

      <section className="book-filter">
        <AllBooks 
          submitted={submitted} 
          filteredBooks={filteredBooks} 
        />
      </section>

      {/* Genre Filter Modal */}
      <FilterModal 
        show={showModal} 
        handleClose={handleCloseModal}
        genres={genres}
        selectedGenres={selectedGenres}
        handleGenreChange={handleGenreChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default MainView;
