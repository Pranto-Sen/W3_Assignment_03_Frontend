import React from 'react';

function SleepSection({room}) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Where you'll sleep</h2>
            {/* <img src="./images/p3.jpeg" alt="" width="300" height="200" style={{ borderRadius: '10px' }} /> */}
            <img src={room.images[0]} alt="" width="300" height="200" style={{ borderRadius: '10px' }} />
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{room.title}</p>
            <p style={{ marginBottom: '40px' }}>{room.bedroom_count} double bed</p>

            <hr />
        </div>
    );
}

export default SleepSection;
