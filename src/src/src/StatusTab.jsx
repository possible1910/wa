import React from "react";

export default function StatusTab() {
  return (
    <div className="wa-status">
      <div className="wa-status-item">
        <img className="wa-avatar" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Status" />
        <div>
          <div className="wa-status-title">Your status</div>
          <div className="wa-status-time">Tap to add status update</div>
        </div>
      </div>
      <div className="wa-status-item">
        <img className="wa-avatar" src="https://randomuser.me/api/portraits/women/4.jpg" alt="Status" />
        <div>
          <div className="wa-status-title">Sarah</div>
          <div className="wa-status-time">Today, 09:00</div>
        </div>
      </div>
    </div>
  );
}
