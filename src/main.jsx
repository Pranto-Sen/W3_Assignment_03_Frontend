// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './style.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
// import HotelPage from './HotelPage'; // Ensure this import exists and points to the correct path
import NotFound from './NotFound'; // Ensure this import exists and points to the correct path
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/hotel/:slug" element={<App />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
