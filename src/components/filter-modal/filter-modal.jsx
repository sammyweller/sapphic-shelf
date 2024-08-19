import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './filter-modal.css';

function FilterModal({ show, handleClose, genres, selectedGenres, handleGenreChange, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select Genres</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Button type="submit" variant="primary" className="button" onClick={handleClose}>
            Show Books
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;
