import React from 'react';

function AmenitiesSection({hotel}) {
    return (
        <div className="amenities-section" style={{ marginTop: '40px' }}>
            <h2>What this place offers</h2>
            <div className="amenities-list" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="amenities-column">
                    <div className="amenity-item">
                        <img src="../../images/kitchen.jpg" alt="Kitchen icon" />
                        <span>{hotel.amenities[0]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/tv.png" alt="TV icon" />
                        <span>{hotel.amenities[1]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/washer.png" alt="Washer icon" />
                        <span>{hotel.amenities[2]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/hair drayer.png" alt="Hair dryer icon" />
                        <span>{hotel.amenities[3]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/carbon.png" alt="Carbon monoxide alarm icon" />
                        <span><del>{hotel.amenities[4]}</del></span>
                    </div>
                </div>
                <div className="amenities-column">
                    <div className="amenity-item">
                        <img src="../../images/wifi-logo.svg" alt="Wifi icon" />
                        <span>{hotel.amenities[5]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/elevator.jpg" alt="Elevator icon" />
                        <span>{hotel.amenities[6]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/drayer.png" alt="Dryer icon" />
                        <span>{hotel.amenities[7]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/fridge.jpg" alt="Refrigerator icon" />
                        <span>{hotel.amenities[8]}</span>
                    </div>
                    <div className="amenity-item">
                        <img src="../../images/smoke-detector.jpg" alt="Smoke alarm icon" />
                        <span><del>{hotel.amenities[9]}</del></span>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <p style={{
                    fontWeight: 'bold',
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '10px 15px',
                    display: 'inline-block'
                }}>
                    Show all 32 amenities
                </p>
            </div>
            <hr />
        </div>
    );
}

export default AmenitiesSection;
