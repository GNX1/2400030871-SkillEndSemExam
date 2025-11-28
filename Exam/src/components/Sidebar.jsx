import React, { useState } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Courses' },
    { id: 3, label: 'Assignments' },
    { id: 4, label: 'Grades' },
    { id: 5, label: 'Schedule' },
    { id: 6, label: 'Messages' },
    { id: 7, label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          {isOpen && <span className="logo-text">Student Hub</span>}
        </div>
        <button
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <a href="#" className="menu-link">
                {isOpen && <span className="menu-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {isOpen && (
          <div className="user-info">
            <div className="user-avatar">JD</div>
            <div className="user-details">
              <p className="user-name">John Doe</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
