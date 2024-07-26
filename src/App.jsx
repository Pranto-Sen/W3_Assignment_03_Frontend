// // import React, { useState, useEffect } from 'react';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Navbar from './Header/Navbar'
// // import Slider from './Body/Slider'
// // import SliderUpperSection from './Body/SliderUpperSection'
// // import HostInfoSection from './Body/HostInfoSection'
// // import SleepSection from './Body/SleepSection'
// // import AmenitiesSection from './Body/AmenitiesSection'
// // import DatePickerStatic from './Body/DatePickerStatic'
// // import BookingWidget from './Body/BookingWidget'
// // import ReviewSection from './Body/ReviewSection'
// // import HostSection from './Body/HostSection'
// // import ThingsToKnowSection from './Footer/ThingsToKnowSection'
// // import ExploreOptions from './Footer/ExploreOptions'
// // import ShimmerLoader from './ShimmerLoader' // Import the ShimmerLoader component

// // // Import the configuration
// // import config from './../config.json';

// // function App() {
// //   const [hotel, setHotel] = useState(null);
// //   const [room, setRoom] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch(`${config.apiBaseUrl}/hotel/hotel-sunrise`)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setHotel(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('There was an error fetching the hotel!', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     fetch(`${config.apiBaseUrl}/hotel/hotel-sunrise/room/deluxe-room`)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setRoom(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('There was an error fetching the hotel!', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <ShimmerLoader />; // Use the shimmer loader while loading
// //   }

// //   return (
// //     <>
// //       <Navbar />

// //       {/* Body */}
// //       <SliderUpperSection />
    
// //       {hotel ? <Slider hotel={hotel} /> : <p>No hotel data available</p>}

// //       <div style={{ display: 'flex', margin: '0 auto', padding: '20px' }}>
// //         <div style={{ flex: '2', marginRight: '40px' }}>
// //           <HostInfoSection />
// //           {room ? <SleepSection room={room} /> : <p>No data available</p>}
// //           {hotel ? <AmenitiesSection hotel={hotel} /> : <p>No Amenities data available</p>}
// //           <DatePickerStatic />
// //         </div>
// //         <div style={{ flex: '1' }}>
// //           <BookingWidget />
// //         </div>
// //       </div>
     
// //       <ReviewSection />
// //       {hotel ? <HostSection hotel={hotel} /> : <p>No Amenities data available</p>}

// //       {/* Footer */}
// //       <ThingsToKnowSection />
// //       <ExploreOptions />
// //     </>
// //   );
// // }

// // export default App;





// // // import React, { useState, useEffect } from 'react';
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'
// // // import Navbar from './Header/Navbar'
// // // import Slider from './Body/Slider'
// // // import SliderUpperSection from './Body/SliderUpperSection'
// // // import HostInfoSection from './Body/HostInfoSection'
// // // import SleepSection from './Body/SleepSection'
// // // import AmenitiesSection from './Body/AmenitiesSection'
// // // import DatePickerStatic from './Body/DatePickerStatic'
// // // import BookingWidget from './Body/BookingWidget'
// // // import ReviewSection from './Body/ReviewSection'
// // // import HostSection from './Body/HostSection'
// // // import ThingsToKnowSection from './Footer/ThingsToKnowSection'
// // // import ExploreOptions from './Footer/ExploreOptions'


// // // function App() {

// // //   const [hotel, setHotel] = useState(null);
// // //   const [room, setRoom] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     fetch('http://localhost:3000/hotel/hotel-sunrise')
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => {
// // //         setHotel(data);
// // //         setLoading(false);
// // //       })
// // //       .catch(error => {
// // //         console.error('There was an error fetching the hotel!', error);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   useEffect(() => {
// // //     fetch('http://localhost:3000/hotel/hotel-sunrise/room/deluxe-room')
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => {
// // //         setRoom(data);
// // //         setLoading(false);
// // //       })
// // //       .catch(error => {
// // //         console.error('There was an error fetching the hotel!', error);
// // //         setLoading(false);
// // //       });
// // //   }, []);
  
// // //   if (loading) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   return (
// // //     <>
// // //       <Navbar></Navbar>

// // //       {/* Body */}
// // //       <SliderUpperSection></SliderUpperSection>
    
// // //       {hotel ? <Slider hotel={hotel}></Slider> :<p>No hotel data available</p>}

// // //       <div style={{ display: 'flex', margin: '0 auto', padding: '20px' }}>
// // //         <div style={{ flex: '2', marginRight: '40px' }}>
// // //           <HostInfoSection />
// // //            {room ? <SleepSection room={room}></SleepSection> :<p>No data available</p>}
// // //           {/* <SleepSection /> */}
// // //           {hotel ? <AmenitiesSection hotel={hotel}/> :<p>No Amenities data available</p>}
         
// // //           <DatePickerStatic />
// // //         </div>
// // //         <div style={{ flex: '1' }}>
// // //           <BookingWidget />
// // //         </div>
// // //       </div>
     
// // //       <ReviewSection></ReviewSection>
// // //       {hotel ? <HostSection hotel={hotel}/> :<p>No Amenities data available</p>}
// // //       {/* <HostSection></HostSection> */}

// // //       {/* Footer */}
// // //       <ThingsToKnowSection />
// // //       <ExploreOptions />


// // //     </>
// // //   )
// // // }

// // // export default App



import React, { useState, useEffect } from 'react';
import Navbar from './Header/Navbar';
import Slider from './Body/Slider';
import SliderUpperSection from './Body/SliderUpperSection';
import HostInfoSection from './Body/HostInfoSection';
import SleepSection from './Body/SleepSection';
import AmenitiesSection from './Body/AmenitiesSection';
import DatePickerStatic from './Body/DatePickerStatic';
import BookingWidget from './Body/BookingWidget';
import ReviewSection from './Body/ReviewSection';
import HostSection from './Body/HostSection';
import ThingsToKnowSection from './Footer/ThingsToKnowSection';
import ExploreOptions from './Footer/ExploreOptions';
import ShimmerLoader from './ShimmerLoader'; // Ensure this import
import config from './../config.json'; // Ensure this import

function App() {
    const [hotel, setHotel] = useState(null);
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${config.apiBaseUrl}/hotel/hotel-sunrise`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setHotel(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the hotel!', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(`${config.apiBaseUrl}/hotel/hotel-sunrise/room/deluxe-room`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRoom(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the hotel!', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ShimmerLoader />;
    }

    return (
        <>
            <Navbar />
            <SliderUpperSection />
            {hotel ? <Slider hotel={hotel} /> :  <div><ShimmerLoader /></div>}
            <div style={{ display: 'flex', margin: '0 auto', padding: '20px' }}>
                <div style={{ flex: '2', marginRight: '40px' }}>
                    <HostInfoSection />
                    {room ? <SleepSection room={room} /> : <ShimmerLoader />}
                    {hotel ? <AmenitiesSection hotel={hotel} /> : <ShimmerLoader />}
                    <DatePickerStatic />
                </div>
                <div style={{ flex: '1' }}>
                    <BookingWidget />
                </div>
            </div>
            <ReviewSection />
            {hotel ? <HostSection hotel={hotel} /> : <ShimmerLoader />}
            <ThingsToKnowSection />
            <ExploreOptions />
        </>
    );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Header/Navbar';
// import Slider from './Body/Slider';
// import SliderUpperSection from './Body/SliderUpperSection';
// import HostInfoSection from './Body/HostInfoSection';
// import SleepSection from './Body/SleepSection';
// import AmenitiesSection from './Body/AmenitiesSection';
// import DatePickerStatic from './Body/DatePickerStatic';
// import BookingWidget from './Body/BookingWidget';
// import ReviewSection from './Body/ReviewSection';
// import HostSection from './Body/HostSection';
// import ThingsToKnowSection from './Footer/ThingsToKnowSection';
// import ExploreOptions from './Footer/ExploreOptions';
// import ShimmerLoader from './ShimmerLoader';
// import config from './../config.json';
// import { useParams } from 'react-router-dom';
// import NotFound from './NotFound'; // Import the NotFound component


// function HotelPage() {
//     const [hotel, setHotel] = useState(null);
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { slug } = useParams();

//     useEffect(() => {
//         fetch(`${config.apiBaseUrl}/hotel/${slug}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setHotel(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the hotel!', error);
//                 setLoading(false);
//             });
//     }, [slug]);

//     useEffect(() => {
//         fetch(`${config.apiBaseUrl}/hotel/${slug}/room/deluxe-room`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setRoom(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the room!', error);
//                 setLoading(false);
//             });
//     }, [slug]);

//     if (loading) {
//         return <ShimmerLoader />;
//     }

//     return (
//         <>
//             <Navbar />
//             <SliderUpperSection />
//             {hotel ? <Slider hotel={hotel} /> : <p>No hotel data available</p>}
//             <div style={{ display: 'flex', margin: '0 auto', padding: '20px' }}>
//                 <div style={{ flex: '2', marginRight: '40px' }}>
//                     <HostInfoSection />
//                     {room ? <SleepSection room={room} /> : <p>No data available</p>}
//                     {hotel ? <AmenitiesSection hotel={hotel} /> : <p>No Amenities data available</p>}
//                     <DatePickerStatic />
//                 </div>
//                 <div style={{ flex: '1' }}>
//                     <BookingWidget />
//                 </div>
//             </div>
//             <ReviewSection />
//             {hotel ? <HostSection hotel={hotel} /> : <p>No Amenities data available</p>}
//             <ThingsToKnowSection />
//             <ExploreOptions />
//         </>
//     );
// }

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//                 <Route path="/hotel/:slug" element={<HotelPage />} />
//                 <Route path="*" element={<NotFound />} /> {/* 404 page route */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;
