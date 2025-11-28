import React from 'react';
import '../styles/RecentActivities.css';

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      title: 'Mathematics Assignment Submitted',
      course: 'Calculus 101',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Physics Quiz - Score: 92/100',
      course: 'Physics II',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'New Lecture Posted',
      course: 'History of Science',
      status: 'New',
    },
    {
      id: 4,
      title: 'Replied to Discussion Thread',
      course: 'Literature 201',
      status: 'Done',
    },
    {
      id: 5,
      title: 'Midterm Exam Scheduled',
      course: 'Chemistry Basics',
      status: 'Pending',
    },
  ];

  return (
    <div className="recent-activities">
      <h2 className="activities-title">Recent Activities</h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-course">{activity.course}</p>
            </div>
            <div className="activity-meta">
              <span className="activity-status">
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
