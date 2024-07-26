// import React from 'react';

// function SleepSection({room}) {
//     return (
//         <div style={{ marginTop: '20px' }}>
//             <h2>Where you'll sleep</h2>
//             {/* <img src="./images/p3.jpeg" alt="" width="300" height="200" style={{ borderRadius: '10px' }} /> */}
//             <img src={room.images["image1"]} alt="" width="300" height="200" style={{ borderRadius: '10px' }} />
//             <img src={room.images["image2"]} alt="" width="300" height="200" style={{ borderRadius: '10px' }} />
//             <img src={room.images["image1"]} alt="" width="300" height="200" style={{ borderRadius: '10px' }} />
//             <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{room.title}</p>
//             <p style={{ marginBottom: '40px' }}>{room.bedroom_count} double bed</p>

//             <hr />
//         </div>
//     );
// }

// export default SleepSection;
// import React from 'react';

// function SleepSection({ room }) {
//     return (
//         <div style={{ marginTop: '20px' }}>
//             <h2>Where you'll sleep</h2>
            
//             {/* Map through the images and render each one */}
//             {Object.entries(room.images).map(([key, imageUrl]) => (
//                 <img
//                     key={key} // Use the key as a unique identifier
//                     src={imageUrl}
//                     alt={key}
//                     width="300"
//                     height="200"
                   
//                     style={{ borderRadius: '10px', marginBottom: '10px',  marginRight:'10px' }}
                    
//                 />
                
//             ))}

//             {/* <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{room.title}</p>
//             <p style={{ marginBottom: '40px' }}>{room.bedroom_count} double bed</p> */}

//             <hr />
//         </div>
//     );
// }

// export default SleepSection;
import React from 'react';

function SleepSection({ room }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Where you'll sleep</h2>

            {/* Map through the images and render each one */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.entries(room.images).map(([key, imageUrl]) => (
                    <img
                        key={key} // Use the key as a unique identifier
                        src={imageUrl}
                        alt={key}
                        width="300"
                        height="200"
                        style={{ borderRadius: '10px', marginBottom: '10px', marginRight: '10px' }}
                    />
                ))}
            </div>

            {/* Text below the images */}
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{room.title}</p>
            <p style={{ marginBottom: '40px' }}>{room.bedroom_count} double bed</p>

            <hr />
        </div>
    );
}

export default SleepSection;
