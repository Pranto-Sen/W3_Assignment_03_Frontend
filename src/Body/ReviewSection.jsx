import React from 'react';

function ReviewSection() {
    return (
        <>
            {/* Review section */}
            <section>
                <div id="review-container">
                    <div id="review-title">No reviews (yet)</div>
                    <div id="review-info">
                        <p>
                            <img src="./images/star.jpg" alt="" width="30px" height="30px" />
                        </p>
                        <p id="review-text">
                            This host has 310 reviews for other places to stay.
                            <span id="show-reviews-link">Show other reviews</span>
                        </p>
                    </div>
                </div>
            </section>
            <hr />

            {/* Map section */}
            <section className="map" style={{ marginTop: '20px' }}>
                <h2>Where you'll be</h2>
                <p>Lima, Provincia de Lima, Peru</p>
                <div id="map">
                    <img src="./images/map.jpg" alt="" style={{ width: '90%', height: '70%' }} />
                </div>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Show more {'>'}</p>
                <hr />
            </section>
        </>
    );
}

export default ReviewSection;
