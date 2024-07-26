import React from 'react';

function ThingsToKnowSection() {
  return (
    <>
      {/* Things to Know section */}
      <section className='map'>
        <h2>Things to know</h2>

        <div id="things-to-know-container">
          {/* House rules */}
          <div id="house-rules" className="info-section">
            <h2 className="section-title" style={{ fontSize: '1.2em', marginBottom: '10px' }}>
              House rules
            </h2>
            <ul className="info-list">
              <li className="info-item">Check-in after 4:00 PM</li>
              <li className="info-item">Checkout before 11:00 AM</li>
              <li className="info-item">2 guests maximum</li>
            </ul>
            <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
              Show more &gt;
            </p>
          </div>

          {/* Safety & property */}
          <div id="safety-property" className="info-section">
            <h2 className="section-title" style={{ fontSize: '1.2em', marginBottom: '10px' }}>
              Safety &amp; property
            </h2>
            <ul className="info-list">
              <li className="info-item">Carbon monoxide alarm not reported</li>
              <li className="info-item">Smoke alarm not reported</li>
              <li className="info-item">Not suitable for children and infants</li>
            </ul>
            <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
              Show more &gt;
            </p>
          </div>

          {/* Cancellation policy */}
          <div id="cancellation-policy" className="info-section">
            <h2 className="section-title" style={{ fontSize: '1.2em', marginBottom: '10px' }}>
              Cancellation policy
            </h2>
            <p>
              Add your trip dates to get the cancellation details for this stay.
            </p>
            <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
              Add dates &gt;
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* Location */}
      <div className='map' style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <p>Peru {'>'} Lima Province {'>'} Jesus Maria</p>
      </div>

      <hr />
    </>
  );
}

export default ThingsToKnowSection;
