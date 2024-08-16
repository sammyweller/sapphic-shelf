import React from 'react';
import BookCard from '../book-card/book-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './all-books.css';

function AllBooks({ submitted, filteredBooks, genres, selectedGenres }) {
    return (
        <div className="all-books">
          {submitted && (
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
              <p class="error-message">Hmm... looks like we can't find any books. Consider choosing fewer genres and try again.</p>
            )
          )}
        </div>
      );
    }

export default AllBooks;
