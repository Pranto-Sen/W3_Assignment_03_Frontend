// import React, { useState, useEffect } from 'react';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const Modal = ({ id, isOpen, closeModal, openModal, title, handleSectionClick, destinationId, checkInId, checkOutId, guestId }) => {
//   return (
//     <div id={id} className={`modal ${isOpen ? 'open' : ''}`} onClick={(e) => e.target.classList.contains('modal') && closeModal()}>
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>&times;</span>
//         <div className="modal-header">
//           <h4 onClick={() => openModal('search-region')}>Search by region</h4>
//           <h4 onClick={() => handleSectionClick('choose-dates')}>Choose your dates</h4>
//           <h4 onClick={() => handleSectionClick('add-guests')}>Add guests</h4>
//         </div>
//         <div className="search-bar">
//           <div className="search-section">
//             <label>Where</label>
//             <input id={destinationId} type="text" placeholder="Search destinations" />
//           </div>
//           <div className="search-section">
//             <label>Check in</label>
//             <input id={checkInId} type="text" placeholder="Add dates" />
//           </div>
//           <div className="search-section">
//             <label>Check out</label>
//             <input id={checkOutId} type="text" placeholder="Add dates" />
//           </div>
//           <div className="search-section">
//             <label>Who</label>
//             <input id={guestId} type="text" placeholder="Add guests" />
//           </div>
//         </div>
//       </div>
//       <div id="regionOne"></div>
//     </div>
//   );
// };

// export default Modal;
