import React from "react";

export default function SearchTrackingId() {
  return (
    <div>
      <div className="search-section">
        <div className="search-container" style={{border:"1px solid red"}}>
          <input
            type="text"
            className="form-control me-3"
            placeholder="Tracking Number"
            aria-label="Tracking Number"
          />
          <button className="track-btn">Track</button>
        </div>
      </div>
    </div>
  );
}
