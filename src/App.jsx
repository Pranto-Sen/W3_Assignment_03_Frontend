import React from 'react';
import { useParams } from 'react-router-dom';
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
import ShimmerLoader from './ShimmerLoader';
import NotFound from './NotFound';
import useHotelData from './useHotelData';

function App() {
    const { slug } = useParams();
    const { hotel, room, loading } = useHotelData(slug);

    if (loading) {
        return <ShimmerLoader />;
    }

    return (
        <>
            {hotel ? (
                <>
                    <Navbar />
                    <SliderUpperSection />
                    <Slider hotel={hotel} />
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
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default App;

