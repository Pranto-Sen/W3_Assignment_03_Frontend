import React from 'react';

function ExploreOptions() {
    return (
        <main>
            <h1 style={{ color: '#484848', fontSize: '24px', marginBottom: '20px' }}>
                Explore other options in and around Lima
            </h1>

            <div id="options-grid">
                <div className="location-item">
                    <div className="location-name">Cieneguilla</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Punta Hermosa</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Asia</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Chaclacayo</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Barranco</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Santiago de Surco</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">San Isidro</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">San Miguel</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
                <div className="location-item">
                    <div className="location-name">Lunahuaná</div>
                    <div style={{ color: '#767676', fontSize: '14px' }}>Vacation rentals</div>
                </div>
            </div>

            <div id="other-type">
                <h2 style={{ color: '#484848', fontSize: '22px', marginBottom: '20px', marginTop: '20px' }}>
                    Other types of stays on Airbnb
                </h2>
                <div id="options-grid">
                    <p style={{ fontWeight: 'bold' }}>Jesús María vacation rentals</p>
                    <p style={{ fontWeight: 'bold' }}>Jesús María monthly stays</p>
                    <p style={{ fontWeight: 'bold' }}>Apartment vacation rentals in Jesús María</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold' }}>Apartment vacation rentals in Lima Province</p>
                </div>
            </div>
        </main>
    );
}

export default ExploreOptions;
