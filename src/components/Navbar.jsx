import React from 'react';

function Navbar({ onToggleSidebar }) {
  return (
    <header className="navbar">
      <button className="navbar-menu-button" onClick={onToggleSidebar}>
        <span className="navbar-menu-icon" />
      </button>
      <div className="navbar-left">
        <h1 className="navbar-title">Smart Attendance &amp; Productivity Analyzer</h1>
        <p className="navbar-subtitle">Live overview of workforce health</p>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <div className="navbar-avatar">LK</div>
          <div className="navbar-profile-text">
            <span className="navbar-profile-name">Admin</span>
            <span className="navbar-profile-role">HR Analytics</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

