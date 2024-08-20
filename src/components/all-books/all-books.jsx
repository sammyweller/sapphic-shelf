import React, { useState, useEffect } from 'react';
import BookCard from '../book-card/book-card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfiniteScroll from 'react-infinite-scroll-component';
import './all-books.css';

function AllBooks({ submitted, filteredBooks }) {
  const [visibleBooks, setVisibleBooks] = useState([]); // State to manage books currently visible
  const [hasMore, setHasMore] = useState(true); // State to determine if more books can be loaded

  useEffect(() => {
    if (filteredBooks.length > 0) {
      setVisibleBooks(filteredBooks.slice(0, 8)); // Load first 8 books initially
      setHasMore(filteredBooks.length > 8); // Determine if more books exist
    } else {
      setVisibleBooks([]);
      setHasMore(false); // No more books to load if filteredBooks is empty
    }
  }, [filteredBooks]); // Update visible books whenever filteredBooks changes

  const fetchMoreBooks = () => {
    if (visibleBooks.length >= filteredBooks.length) {
      setHasMore(false); // If all books are loaded, set hasMore to false
      return;
    }
    // Load the next batch of books
    setTimeout(() => {
      setVisibleBooks(prevBooks => [
        ...prevBooks,
        ...filteredBooks.slice(prevBooks.length, prevBooks.length + 8)
      ]);
    }, 500);
  };

  return (
    <div className="all-books">
      {submitted && filteredBooks.length > 0 ? (
        <InfiniteScroll
          dataLength={visibleBooks.length}
          next={fetchMoreBooks}
          hasMore={hasMore}
          loader={<h4 className="loading-more">Loading more books...</h4>}
          endMessage={<p className="end-message">You've reached the end! Wow...</p>}
        >
          <section className="filtered-books">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center custom-row-gap">
              {visibleBooks.map((book) => (
                <Col key={book.id} className="d-flex justify-content-center align-items-center">
                  <BookCard book={book} />
                </Col>
              ))}
            </Row>
          </section>
        </InfiniteScroll>
      ) : (
        submitted && <p>Hmm... looks like we can't find any books. Consider choosing fewer genres and try again.</p>
      )}
    </div>
  );
}

export default AllBooks;
