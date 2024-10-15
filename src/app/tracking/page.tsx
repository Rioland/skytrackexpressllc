import React from 'react'

export default function Tracking() {
  return (
    <div className='track'>

  {/* Search Section with Background Image */}
  <div className="search-section">
    <div className="search-container">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Tracking Number"
        aria-label="Tracking Number"
      />
      <button className="track-btn">Track</button>
    </div>
  </div>
  <div className="yes">
    <h4>How can we help you today?</h4>
    <p>
      skytrackexpressllc Logistics is a fulfillment service that delivers packages especially
      for e-retailers and online platforms.
    </p>
  </div>
  <div className="container mt-5">
    {/* First Row */}
    <div className="row content-section">
      <div className="col-md-4">
        <img src="./track image/2.png" alt="Logo" />
        <h5>SUPERIOR CUSTOMER SERVICE</h5>
        <p>
          The best customer service backed by <br />
          advanced technology.
        </p>
        <a href="#">Go Knowledge Base</a>
      </div>
      {/* Second Row */}
      <div className="col-md-4">
        <img src="./track image/3.png" alt="Logo" />
        <h5>DYNAMIC DELIVERY SERVICE</h5>
        <p>
          We offer Pay on Delivery, Prepaid and Debit <br />
          on Delivery services to our clients.
        </p>
        <a href="#">Go Knowledge Base</a>
      </div>
      {/* Third Row */}
      <div className="col-md-4">
        <img src="./track image/4.png" alt="Logo" />
        <h5>ENVIRONMENTALLY FRIENDLY</h5>
        <p>
          Our bicycle and motorcycle-based couriers <br />
          mean traffic will never be a bottleneck.
        </p>
        <a href="#">Go Knowledge Base</a>
      </div>
    </div>
  </div>


    </div>
  )
}
