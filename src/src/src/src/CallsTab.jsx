import React from "react";

export default function CallsTab() {
  return (
    <div className="wa-calls">
      <div className="wa-call-item">
        <img className="wa-avatar" src="https://randomuser.me/api/portraits/women/5.jpg" alt="Avatar" />
        <div>
          <div className="wa-call-title">Diane</div>
          <div className="wa-call-snippet">Incoming • Today, 07:25</div>
        </div>
        <span className="wa-call-action" role="img" aria-label="Phone">📞</span>
      </div>
    </div>
  );
}
