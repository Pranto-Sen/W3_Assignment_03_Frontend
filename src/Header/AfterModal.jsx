// import React, { useState, useEffect } from 'react';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Modal from './Modal';
// // import Modal from './Modal';
// // import './App.css'; // Assume you have the appropriate CSS styles here

// const AfterModal = () => {
//   const [modals, setModals] = useState({
//     anywhere: false,
//     anyweek: false,
//     addguests: false,
//     'search-region': false,
//     'choose-dates': false,
//     'add-guests': false,
//   });

//   const openModal = (modalId) => {
//     setModals((prevModals) => ({
//       ...prevModals,
//       [modalId]: true,
//     }));
//   };

//   const closeModal = () => {
//     setModals({
//       anywhere: false,
//       anyweek: false,
//       addguests: false,
//       'search-region': false,
//       'choose-dates': false,
//       'add-guests': false,
//     });
//   };

//   const handleSectionClick = (section) => {
//     setModals((prevModals) => ({
//       ...prevModals,
//       'search-region': section === 'search-region',
//       'choose-dates': section === 'choose-dates',
//       'add-guests': section === 'add-guests',
//     }));
//   };

//   useEffect(() => {
//     flatpickr("#calendar-container1", {
//       inline: true,
//       dateFormat: "Y-m-d",
//       altInput: true,
//       altFormat: "F j, Y",
//       defaultDate: new Date(),
//       minDate: "2023-01-01",
//       maxDate: "2024-12-31",
//       onChange: function (selectedDates, dateStr, instance) {
//         var inputField = document.getElementById("selected-date-1");
//         var inputField2 = document.getElementById("selected-date-2");
//         if (inputField.value !== "") {
//           if (inputField.value > dateStr) {
//             //alert("Please select after a date to check in");
//           } else {
//             inputField2.value = dateStr;
//           }
//         } else {
//           inputField.value = dateStr;
//         }
//       },
//     });

//     flatpickr("#calendar-container2", {
//       inline: true,
//       dateFormat: "Y-m-d",
//       altInput: true,
//       altFormat: "F j, Y",
//       defaultDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
//       minDate: "2023-01-01",
//       maxDate: "2024-12-31",
//       onChange: function (selectedDates, dateStr, instance) {
//         var inputField = document.getElementById("selected-date-1");
//         var inputField2 = document.getElementById("selected-date-2");
//         if (inputField.value !== "") {
//           if (inputField.value > dateStr) {
//             //alert("Please select after a date to check in");
//           } else {
//             inputField2.value = dateStr;
//           }
//         } else {
//           inputField.value = dateStr;
//         }
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <nav>
//         <ul id="navbar-list">
//           <li id="anywhere" onClick={() => openModal('anywhere')}>Anywhere</li>
//           <li id="anyweek" onClick={() => openModal('anyweek')}>Anyweek</li>
//           <li id="addguests" onClick={() => openModal('addguests')}>Add Guests</li>
//         </ul>
//       </nav>
//       <Modal
//         id="modal-anywhere"
//         isOpen={modals.anywhere}
//         closeModal={closeModal}
//         openModal={openModal}
//         title="Anywhere"
//         handleSectionClick={handleSectionClick}
//         destinationId="search-destination"
//         checkInId="selected-date-1"
//         checkOutId="selected-date-2"
//         guestId="guestId"
//       />
//       <Modal
//         id="modal-anyweek"
//         isOpen={modals.anyweek}
//         closeModal={closeModal}
//         openModal={openModal}
//         title="Any Week"
//         handleSectionClick={handleSectionClick}
//         destinationId="search-destination-2"
//         checkInId="selected-date-3"
//         checkOutId="selected-date-4"
//         guestId="guestId-2"
//       />
//       <Modal
//         id="modal-addguests"
//         isOpen={modals.addguests}
//         closeModal={closeModal}
//         openModal={openModal}
//         title="Add Guests"
//         handleSectionClick={handleSectionClick}
//         destinationId="search-destination-3"
//         checkInId="selected-date-5"
//         checkOutId="selected-date-6"
//         guestId="guestId-3"
//       />
//       {/* The rest of your content/components */}
//     </div>
//   );
// };

// export default AfterModal;
