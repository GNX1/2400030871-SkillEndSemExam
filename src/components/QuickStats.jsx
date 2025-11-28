import React from 'react';
import '../styles/QuickStats.css';

export default function QuickStats() {
  const stats = [
    {
      id: 1,
      label: 'Active Courses',
      value: '5',
    },
    {
      id: 2,
      label: 'Pending Assignments',
      value: '3',
    },
    {
      id: 3,
      label: 'Current GPA',
      value: '3.8',
    },
    {
      id: 4,
      label: 'Study Hours',
      value: '24.5',
    },
  ];

  return (
    <div className="quick-stats">
      <h2 className="stats-title">Quick Stats</h2>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
