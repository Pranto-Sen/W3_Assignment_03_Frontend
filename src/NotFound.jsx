import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found.</p>
        <p className="not-found-description">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <Link to="/hotel/hotel-sunrise" className="not-found-link">Go to Hotelpage</Link>
      </div>
    </div>
  );
}

export default NotFound;

