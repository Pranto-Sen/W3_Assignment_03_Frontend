// import React from 'react';

// function Slider({ hotel }) {
//     return (
//         <section className="slider">
//             <div className="left-side">
//                 {/* <img src="./images/p1.jpeg" alt="Image 1" /> */}
//                 <img src={hotel.images[0]} alt="Image 1" />
//                 <div className="overlay-icon"></div>
//             </div>
//             <div className="right-side">
//                 <div className="upper-section">
//                     {/* <div><img src="./images/p2.jpeg" alt="Image 2" /></div>
//                     <div><img src="./images/p3.jpeg" alt="Image 3" /></div> */}
//                     <div><img src={hotel.images[1]} alt="Image 2" /></div>
//                     <div><img src={hotel.images[2]} alt="Image 3" /></div>
//                 </div>
//                 <div className="lower-section">
//                     {/* <div><img src="./images/p3.jpeg" alt="Image 4" /></div> */}
//                     <div><img src={hotel.images[3]} alt="Image 4" /></div>
//                     <div>
//                         {/* <img src="./images/p2.jpeg" alt="Image 5" /> */}
//                         <img src={hotel.images[4]} alt="Image 5" />
//                         <span className="overlay-text" style={{ cursor: 'pointer' }}>Show all photos</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Slider;


// import React, { useState } from 'react';
// import GalleryModal from './GalleryModal';

// function Slider({ hotel }) {
//     const [isGalleryOpen, setIsGalleryOpen] = useState(false);

//     const openGallery = () => {
//         setIsGalleryOpen(true);
//     };

//     const closeGallery = () => {
//         setIsGalleryOpen(false);
//     };

//     return (
//         <section className="slider">
//             <div className="left-side">
//                 <img src={hotel.images[0]} alt="Image 1" />
//                 <div className="overlay-icon"></div>
//             </div>
//             <div className="right-side">
//                 <div className="upper-section">
//                     <div><img src={hotel.images[1]} alt="Image 2" /></div>
//                     <div><img src={hotel.images[2]} alt="Image 3" /></div>
//                 </div>
//                 <div className="lower-section">
//                     <div><img src={hotel.images[3]} alt="Image 4" /></div>
//                     <div>
//                         <img src={hotel.images[4]} alt="Image 5" />
//                         <span className="overlay-text" style={{ cursor: 'pointer' }} onClick={openGallery}>Show all photos</span>
//                     </div>
//                 </div>
//             </div>

//             {isGalleryOpen && <GalleryModal photos={hotel.images} onClose={closeGallery} />}
//         </section>
//     );
// }

// export default Slider;


import React, { useState } from 'react';

const Slider = ({ hotel }) => {
    console.log(hotel);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // const openGallery = (index) => {
    //     setCurrentPhotoIndex(index);
    //     setIsGalleryOpen(true);
    // };

    // const closeGallery = () => {
    //     setIsGalleryOpen(false);
    // };

    // const showPreviousPhoto = () => {
    //     setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length);
    // };

    // const showNextPhoto = () => {
    //     setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
    // };
   
    return (
        <section className="slider">
            <div className="left-side">
                <img src={hotel.images["image1"]} alt="Image 1" />
                <div className="overlay-icon"></div>
            </div>
            <div className="right-side">
                <div className="upper-section">
                    <div><img src={hotel.images["image2"]} alt="Image 2" /></div>
                    <div><img src={hotel.images["image3"]} alt="Image 3" /></div>
                </div>
                <div className="lower-section">
                    <div><img src={hotel.images["image4"]} alt="Image 4" /></div>
                    <div>
                        <img src={hotel.images["image5"]} alt="Image 5" />
                        <span className="overlay-text" style={{ cursor: 'pointer' }} onClick={() => openGallery(0)}>Show all photos</span>
                    </div>
                </div>
            </div>

            {isGalleryOpen && (
                <div className="gallery-modal">
                    <div className="gallery-modal-content">
                        <span className="gallery-close-btn" onClick={closeGallery}>&times;</span>
                        <img className="gallery-image" src={hotel.images[currentPhotoIndex]} alt={`Gallery ${currentPhotoIndex + 1}`} />
                        <button className="prev" onClick={showPreviousPhoto}>&lt;</button>
                        <button className="next" onClick={showNextPhoto}>&gt;</button>
                        <div className="photo-counter">{currentPhotoIndex + 1}/{hotel.images.length}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Slider;

