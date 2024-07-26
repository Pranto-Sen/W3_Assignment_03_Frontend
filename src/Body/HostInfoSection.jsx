import React from 'react';

function HostInfoSection() {
    return (
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Entire rental unit in Lima, Peru
                </p>
                <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./images/star.jpg" alt="" width="20" height="20" />
                    <p>New</p>
                </div>

                <hr />
                <div className="host-profile" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./images/profile.png" alt="Host picture" />
                    <div>
                        <h2>Hosted by Fernanda</h2>
                        <p className="blur">Superhost . 7 years hosting</p>
                    </div>
                </div>
                <hr />
                <div className="host-profile" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./images/door.jpg" alt="Host picture" />
                    <div>
                        <h2>Self Check-in</h2>
                        <p className="blur">Check yourself in with the smartlock</p>
                    </div>
                </div>
                <div className="host-profile" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                    <img src="./images/people.png" alt="Host picture" />
                    <div>
                        <h2>Fernando is superhost</h2>
                        <p className="blur">Superhosts are experienced, highly rated hosts</p>
                    </div>
                </div>
                <hr />

                {/* Paragraph content */}
                <div className="content-section">
                    <div className="translated-info" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Some info has been automatically translated.</p>
                        <p>Show original</p>
                    </div>

                    <p>
                        Welcome to our brand-new 1 bedroom apartment, in a quiet and
                        central location next to a park!
                    </p>
                    <p>
                        It's conveniently located in Pueblo Libre, just 25 min. away from
                        the airport. Steps away <br />
                        from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya,
                        Instituto Britanico, <br />
                        Hospital Santa Rosa, YMCA Peru, and Alas Peruanas University. It's
                        also very close to La...
                    </p>
                    <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                        Show more &gt;
                    </p>
                    <hr />
                </div>
            </div>
        </section>
    );
}

export default HostInfoSection;
