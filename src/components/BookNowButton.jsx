import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookNowButton.css';

function BookNowButton() {
  return (
    <Link to="/contact" className="book-now-float" title="Book Your Event Now">
      <span className="book-now-text">Book Now</span>
      <span className="pulse-ring-book"></span>
    </Link>
  );
}

export default BookNowButton;