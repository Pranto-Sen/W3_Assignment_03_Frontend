import { useState, useEffect } from 'react';
import config from './../config.json';

const useHotelData = (slug) => {
    const [hotel, setHotel] = useState(null);
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.apiBaseUrl}/hotel/${slug}`)
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
    }, [slug]);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.apiBaseUrl}/hotel/${slug}/room/deluxe-room`)
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
                console.error('There was an error fetching the room!', error);
                setLoading(false);
            });
    }, [slug]);

    return { hotel, room, loading };
};

export default useHotelData;
