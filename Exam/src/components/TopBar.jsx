import React, { useState } from 'react';
import '../styles/TopBar.css';

export default function TopBar() {
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'Assignment Due', message: 'Math homework due tomorrow' },
    { id: 2, title: 'Grade Posted', message: 'Physics exam grades available' },
    { id: 3, title: 'New Message', message: 'Message from Professor' },
  ];

  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <h1 className="page-title">Dashboard</h1>
        </div>

        <div className="topbar-right">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="topbar-icons">
            <button className="icon-btn">
              Notify
              <span className="notification-badge">3</span>
            </button>

            <div className="notification-dropdown">
              <button
                className="icon-btn"
                onClick={() => setNotifOpen(!notifOpen)}
              >
                Messages
              </button>
              {notifOpen && (
                <div className="notification-menu">
                  <div className="notification-header">
                    <h3>Notifications</h3>
                  </div>
                  <div className="notification-list">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="notification-item">
                        <h4>{notif.title}</h4>
                        <p>{notif.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="icon-btn">
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
