import React from 'react';

function HostSection({hotel}) {
    return (
        <>
            {/* Meet your host part */}
            <section>
                <h2 className='map'>Meet your Host</h2>
                <div id="host-container">
                    <div id="host-card">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <img src="../../images/profile.png" alt="Host Image" />
                                {/* <h2>Fernando</h2> */}
                                <h2>{hotel.host_information[0]["name"]}</h2>
                                <p className="superhost">{hotel.host_information[0]["title"]}</p>
                            </div>

                            <div>
                                <p>
                                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>310</span>
                                    <br />Reviews
                                </p>
                                <p>
                                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>4.92★</span>
                                    <br />
                                    Rating
                                </p>
                                <p>
                                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>7</span>
                                    <br />
                                    Years hosting
                                </p>
                            </div>
                        </div>

                        <p>Born in the 80s</p>
                        <p>My work: Hospitality</p>
                        <p>
                        {hotel.host_information[0]["description"]}
                        </p>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                            Show more {'>'}
                        </p>
                    </div>
                    <div id="host-info">
                        <h2>Fernando is a Superhost</h2>
                        <p>
                            Superhosts are experienced, highly rated hosts who are committed
                            to providing great stays for guests.
                        </p>
                        <h3>Co-host</h3>
                        <div className="co-hosts">
                            <img src="../../images/profile.png" alt="Co-host Percy" />
                            <span style={{ marginRight: '20px' }}>Percy</span>
                            <img src="../../images/profile.png" alt="Co-host Raul" />
                            <span>Raul</span>
                        </div>
                        <h3>Host Details</h3>
                        <div className="host-details">
                            <p>Response rate: 100%</p>
                            <p>Responds within an hour</p>
                        </div>
                        <div className="message-host">
                            <button>Message Host</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}

export default HostSection;
