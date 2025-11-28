import React from 'react';
import '../styles/UpcomingSessions.css';

export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: 'Calculus Lecture',
      course: 'Mathematics',
      date: 'Today',
      time: '02:00 PM',
      room: 'Room 301',
    },
    {
      id: 2,
      title: 'Physics Lab',
      course: 'Physics II',
      date: 'Today',
      time: '04:30 PM',
      room: 'Lab 102',
    },
    {
      id: 3,
      title: 'English Discussion',
      course: 'Literature 201',
      date: 'Tomorrow',
      time: '10:00 AM',
      room: 'Room 205',
    },
    {
      id: 4,
      title: 'Chemistry Practical',
      course: 'Chemistry Basics',
      date: 'Tomorrow',
      time: '03:00 PM',
      room: 'Lab 201',
    },
  ];

  return (
    <div className="upcoming-sessions">
      <h2 className="sessions-title">Upcoming Sessions</h2>
      <div className="sessions-list">
        {sessions.map((session) => (
          <div key={session.id} className="session-card">
            <div className="session-info">
              <h3 className="session-title">{session.title}</h3>
              <p className="session-course">{session.course}</p>
              <div className="session-details">
                <span className="session-date">{session.date} at {session.time}</span>
                <span className="session-room">{session.room}</span>
              </div>
            </div>
            <div className="session-actions">
              <button className="session-btn">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
