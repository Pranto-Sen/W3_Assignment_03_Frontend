import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('region');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [destination, setDestination] = useState('');

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleTabClick = (tab) => setActiveTab(tab);

  const getGuestSummary = () => `${adults + children} guests, ${infants} infants, ${pets} pets`;

  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const handleLocationClick = (location) => {
    setDestination(location);
    setActiveTab('dates');
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <nav id="navbar">
      <ul className="side-navbar"></ul>
      <ul id="navbar-list">
        <li id="anywhere" style={{ fontWeight: 'bold' }} onClick={openModal}>Anywhere</li>
        <li id="anyweek" style={{ fontWeight: 'bold' }} onClick={openModal}>Any week</li>
        <li id="addguests" onClick={openModal}>Add guests</li>
        <li>
          <img src="../../images/search.png" alt="search" width="30" height="30" onClick={openModal} />
        </li>
      </ul>
      <ul className="side-navbar" id="navbar-list">
        <li>
          <img className="side-navbar" src="../../images/language.svg" alt="language" width="30" height="30" onClick={openModal} />
        </li>
        <li>
          <img className="side-navbar" src="../../images/menu.svg" alt="menu" width="30" height="30" onClick={openModal} />
        </li>
        <li>
          <img className="side-navbar" src="../../images/profile.png" alt="profile" width="30" height="30" onClick={openModal} />
        </li>
      </ul>
      {modalOpen && (
        <div id="modal-anywhere" className="modal designModal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px'
            }}>
              <h4 onClick={() => handleTabClick('region')} style={{ cursor: 'pointer' }}>Search by region</h4>
              <h4 onClick={() => handleTabClick('dates')} style={{ cursor: 'pointer' }}>Choose your dates</h4>
              <h4 onClick={() => handleTabClick('guests')} style={{ cursor: 'pointer' }}>Add guests</h4>
            </div>
            <div className="search-bar">
              <div className="search-section">
                <label>Where</label>
                <input 
                  id="search-destination" 
                  type="text" 
                  placeholder="Search destinations" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="search-section">
                <label>Check in</label>
                <input 
                  id="selected-date-1" 
                  type="text" 
                  placeholder="Add dates" 
                  value={startDate ? startDate.toLocaleDateString() : ''} 
                  readOnly 
                />
              </div>
              <div className="search-section">
                <label>Check out</label>
                <input 
                  id="selected-date-2" 
                  type="text" 
                  placeholder="Add dates" 
                  value={endDate ? endDate.toLocaleDateString() : ''} 
                  readOnly 
                />
              </div>
              <div className="search-section">
                <label>Who</label>
                <input id="guestId" type="text" value={getGuestSummary()} readOnly />
              </div>
            </div>
          </div>
          <div className="modal-body">
            {activeTab === 'region' && (
              <div className="section" id="searchregionInner">
                <div className="region-grid">
                  <div className="region-item" onClick={() => handleLocationClick("I'm flexible")}>
                    <img src="../../images/small_map.jpg" alt="I'm flexible" />
                    <p>I'm flexible</p>
                  </div>
                  <div className="region-item" onClick={() => handleLocationClick("Southeast Asia")}>
                    <img src="../../images/small_map.jpg" alt="Southeast Asia" />
                    <p>Southeast Asia</p>
                  </div>
                  <div className="region-item" onClick={() => handleLocationClick("Canada")}>
                    <img src="../../images/small_map.jpg" alt="Canada" />
                    <p>Canada</p>
                  </div>
                  <div className="region-item" onClick={() => handleLocationClick("Europe")}>
                    <img src="../../images/small_map.jpg" alt="Europe" />
                    <p>Europe</p>
                  </div>
                  <div className="region-item" onClick={() => handleLocationClick("Thailand")}>
                    <img src="../../images/small_map.jpg" alt="Thailand" />
                    <p>Thailand</p>
                  </div>
                  <div className="region-item" onClick={() => handleLocationClick("Middle East")}>
                    <img src="../../images/small_map.jpg" alt="Middle East" />
                    <p>Middle East</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'dates' && (
              <div className="section" id="choose-dates">
                <div className="calendar">
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    monthsShown={2}
                  />
                </div>
              </div>
            )}
            {activeTab === 'guests' && (
              <div className="section" id="add-guests">
                <h3>Add guests content</h3>
                <div className="container">
                  <div className="row">
                    <label htmlFor="adults">Adults <span>Ages 13 or above</span></label>
                    <div className="counter">
                      <button className="decrement" onClick={() => decrement(setAdults, adults)}>-</button>
                      <input type="text" id="adults" value={adults} readOnly />
                      <button className="increment" onClick={() => increment(setAdults, adults)}>+</button>
                    </div>
                  </div>
                  <div className="row">
                    <label htmlFor="children">Children <span>Ages 2 – 12</span></label>
                    <div className="counter">
                      <button className="decrement" onClick={() => decrement(setChildren, children)}>-</button>
                      <input type="text" id="children" value={children} readOnly />
                      <button className="increment" onClick={() => increment(setChildren, children)}>+</button>
                    </div>
                  </div>
                  <div className="row">
                    <label htmlFor="infants">Infants <span>Under 2</span></label>
                    <div className="counter">
                      <button className="decrement" onClick={() => decrement(setInfants, infants)}>-</button>
                      <input type="text" id="infants" value={infants} readOnly />
                      <button className="increment" onClick={() => increment(setInfants, infants)}>+</button>
                    </div>
                  </div>
                  <div className="row">
                    <label htmlFor="pets">Pets <span>Bringing a service animal?</span></label>
                    <div className="counter">
                      <button className="decrement" onClick={() => decrement(setPets, pets)}>-</button>
                      <input type="text" id="pets" value={pets} readOnly />
                      <button className="increment" onClick={() => increment(setPets, pets)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
