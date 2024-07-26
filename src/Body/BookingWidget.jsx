import React from 'react';

function BookingWidget() {
    return (
        <div className="booking-widget">
            <h2>Add dates for prices</h2>
            <div className="date-inputs">
                <div className="date-input">
                    <label htmlFor="check-in">CHECK-IN</label>
                    <input type="date" id="check-in" name="check-in" />
                </div>
                <div className="date-input">
                    <label htmlFor="check-out">CHECKOUT</label>
                    <input type="date" id="check-out" name="check-out" />
                </div>
            </div>
            <button className="check-availability">Check availability</button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../../images/flag2.jpg" alt="" width="30" height="30" />
                <p className="price-info" style={{ textDecoration: 'underline' }}>
                    Report this listing
                </p>
            </div>
        </div>
    );
}

export default BookingWidget;
