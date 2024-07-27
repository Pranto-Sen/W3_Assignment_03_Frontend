

// function SliderUpperSection() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <h1 style={{ fontSize: '30px', marginRight: '12px' }}>Comfy New Apt. in Pueblo Libre!</h1>
//       <div className="actions" style={{ display: 'flex', gap: '12px' }}>
//         <button className="custom-share-button">
//           <img src="./images/share.png" alt="Share icon" />
//           <p>Share</p>
//         </button>
//         <button className="custom-save-button">
//           <img src="./../../images/save.png" alt="Save icon" />
//           <img src></img>
//           <p>Save</p>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SliderUpperSection;
// import React from 'react';

// function SliderUpperSection() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <h1 style={{ fontSize: '30px', marginRight: '12px' }}>Comfy New Apt. in Pueblo Libre!</h1>
//       <div className="actions" style={{ display: 'flex', gap: '12px' }}>
//         <button className="custom-share-button" style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           cursor: 'pointer',
//           background: 'none',
//           border: 'none',
//           fontSize: '16px'
//         }}>
//           <img src="./images/share.png" alt="Share icon" style={{ width: '18px', height: '18px' }} />
//           <p style={{ textDecoration: 'underline', margin: '0' }}>Share</p>
//         </button>
//         <button className="love-button" style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           padding: '5px',
//           fontFamily: 'Arial, sans-serif'
//         }}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//           </svg>
//           <p style={{ textDecoration: 'underline', margin: '0' }}>Save</p>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SliderUpperSection;
// import React from 'react';

// function SliderUpperSection() {
//     return (
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h1 style={{ fontSize: '30px' }}>Comfy New Apt. in Pueblo Libre!</h1>
//             <div className="actions" style={{ display: 'flex', gap: '12px' }}>
//                 <button className="custom-share-button" style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     cursor: 'pointer',
//                     background: 'none',
//                     border: 'none',
//                     fontSize: '16px'
//                 }}>
//                     <img src="./images/share.png" alt="Share icon" style={{ width: '18px', height: '18px' }} />
//                     <p style={{ textDecoration: 'underline', margin: '0' }}>Share</p>
//                 </button>
//                 <button className="love-button" style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     background: 'none',
//                     border: 'none',
//                     cursor: 'pointer',
//                     padding: '5px',
//                     fontFamily: 'Arial, sans-serif'
//                 }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
//                         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                     </svg>
//                     <p style={{ textDecoration: 'underline', margin: '0' }}>Save</p>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SliderUpperSection;

// function SliderUpperSection() {
//     return (
//         <div className="slider-upper-section">
//             <h1>Comfy New Apt. in Pueblo Libre!</h1>
//             <div className="actions">
//                 <button className="custom-share-button">
//                     <img src="./images/share.png" alt="Share icon" />
//                     <p>Share</p>
//                 </button>
//                 <button className="love-button">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-heart">
//                         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                     </svg>
//                     <p>Save</p>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SliderUpperSection;


// import React, { useState } from 'react';

// function SliderUpperSection() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isLoved, setIsLoved] = useState(localStorage.getItem('isLoved') === 'true');

//     const handleShareClick = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleCopyLink = () => {
//         const url = window.location.href;
//         navigator.clipboard.writeText(url).then(() => {
//             alert("Link copied to clipboard!");
//         }).catch(err => {
//             console.error('Failed to copy: ', err);
//         });
//     };

//     const handleLoveClick = () => {
//         const newLovedState = !isLoved;
//         setIsLoved(newLovedState);
//         localStorage.setItem('isLoved', newLovedState);
//     };

//     return (
//         <div className="slider-upper-section">
//             <h1>Comfy New Apt. in Pueblo Libre!</h1>
//             <div className="actions">
//                 <button className="custom-share-button" onClick={handleShareClick}>
//                     <img src="./images/share.png" alt="Share icon" />
//                     <p>Share</p>
//                 </button>
//                 <button className={`love-button ${isLoved ? 'loved' : ''}`} onClick={handleLoveClick}>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-heart">
//                         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                     </svg>
//                     <p>Save</p>
//                 </button>
//             </div>

//             {/* Share Modal */}
//             {isModalOpen && (
//                 <div id="customShareModal" className="custom-modal">
//                     <div className="custom-modal-content">
//                         <span className="custom-modal-close" onClick={handleCloseModal}>&times;</span>
//                         <p>Share this link:</p>
//                         <button id="customCopyLink" onClick={handleCopyLink}>Copy Link</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default SliderUpperSection;

import React, { useState } from 'react';
// import './SliderUpperSection.css'; // Ensure you have this CSS file

function SliderUpperSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoved, setIsLoved] = useState(localStorage.getItem('isLoved') === 'true');

    const handleShareClick = () => {
        debugger
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert("Link copied to clipboard!");
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleLoveClick = () => {
        const newLovedState = !isLoved;
        setIsLoved(newLovedState);
        localStorage.setItem('isLoved', newLovedState);
    };

    return (
        <div className="slider-upper-section">
            <h1>Comfy New Apt. in Pueblo Libre!</h1>
            <div className="actions">
                <button className="custom-share-button" onClick={handleShareClick}>
                    <img src="../../images/share.png" alt="Share icon" />
                    <p>Share</p>
                </button>
                <button className={`love-button ${isLoved ? 'loved' : ''}`} onClick={handleLoveClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-heart">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p>Save</p>
                </button>
            </div>

            {/* Share Modal */}
            {isModalOpen && (
                <div className="custom-share-modal">
                    <div className="custom-share-modal-content">
                        <span className="custom-share-modal-close" onClick={handleCloseModal}>&times;</span>
                        <div className="custom-share-options">
                            <div className="custom-share-option" onClick={handleCopyLink}>
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                                Copy Link
                            </div>
                            <div className="custom-share-option">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                Email
                            </div>
                            <div className="custom-share-option">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                                </svg>
                                Messages
                            </div>
                            <div className="custom-share-option">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
                                </svg>
                                Messenger
                            </div>
                            <div className="custom-share-option">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                                Twitter
                            </div>
                            <div className="custom-share-option">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                </svg>
                                Embed
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SliderUpperSection;
