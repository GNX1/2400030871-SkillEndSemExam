# Student Dashboard - Responsive React App

A modern, responsive student dashboard built with **Vite** and **React**. Features a responsive layout with sidebar navigation, top bar, quick stats cards, recent activities, and upcoming sessions.

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Sidebar Navigation** - Collapsible sidebar with menu items and user profile
- **Top Bar** - Search functionality, notifications, and user controls
- **Quick Stats Cards** - Display active courses, assignments, GPA, and study hours
- **Recent Activities** - Timeline of student activities with status badges
- **Upcoming Sessions** - Calendar view of upcoming classes and sessions
- **Clean UI** - Minimal graphics, simple and professional design
- **No External Libraries** - Uses only React, HTML, CSS Grid/Flexbox

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── TopBar.jsx           # Top navigation bar with search
│   ├── QuickStats.jsx       # Quick statistics cards
│   ├── RecentActivities.jsx # Recent activities timeline
│   └── UpcomingSessions.jsx # Upcoming classes/sessions
├── styles/
│   ├── Dashboard.css        # Main layout styles
│   ├── Sidebar.css          # Sidebar styles
│   ├── TopBar.css           # Top bar styles
│   ├── QuickStats.css       # Stats cards styles
│   ├── RecentActivities.css # Activities styles
│   └── UpcomingSessions.css # Sessions styles
├── App.jsx                  # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project:**
```bash
cd d:\SkillEndSemExam
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173/
```

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Previews the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality.

## 🎨 Component Overview

### Sidebar Component
- Collapsible navigation menu
- User profile section at bottom
- Menu items with icons
- Responsive on mobile (hidden by default)

**File:** `src/components/Sidebar.jsx`

### TopBar Component
- Search functionality
- Notification dropdown
- User profile button
- Responsive design with collapsing elements

**File:** `src/components/TopBar.jsx`

### QuickStats Component
- 4 stat cards displaying:
  - Active Courses
  - Pending Assignments
  - Current GPA
  - Study Hours
- Grid layout that adapts to screen size
- Color-coded cards

**File:** `src/components/QuickStats.jsx`

### RecentActivities Component
- Timeline of recent student activities
- Activity types: assignment, grade, announcement, discussion, exam
- Status badges with color coding
- Timestamps
- Course names

**File:** `src/components/RecentActivities.jsx`

### UpcomingSessions Component
- Cards for upcoming sessions/classes
- Session type icons
- Date and time information
- Room location
- "Join" action button
- Grid layout for multiple sessions

**File:** `src/components/UpcomingSessions.jsx`

## 🎨 Styling System

### Color Palette
- **Primary Background:** `#f5f7fa`
- **Card Background:** `#ffffff`
- **Sidebar:** `#2c3e50`
- **Primary Color:** `#3498db`
- **Text Primary:** `#2c3e50`
- **Text Secondary:** `#7f8c8d`
- **Success:** `#2ecc71`
- **Error:** `#e74c3c`
- **Warning:** `#f39c12`

### Layout System
- **CSS Grid** for dashboard layout
- **Flexbox** for component alignment
- **Responsive Breakpoints:**
  - `1024px` - Tablet landscape
  - `768px` - Tablet portrait
  - `480px` - Mobile

## 📱 Responsive Design

### Desktop (1024px+)
- Full sidebar visible
- Two-column content layout
- All features visible

### Tablet (768px - 1024px)
- Collapsible sidebar
- Single-column content layout
- Optimized spacing

### Mobile (<768px)
- Hidden sidebar with toggle
- Adjusted top bar
- Stacked layout for all sections

## 🔧 Customization

### Adding New Menu Items

Edit `src/components/Sidebar.jsx`:

```jsx
const menuItems = [
  { id: 1, label: 'Dashboard', icon: '◆' },
  { id: 2, label: 'Your New Item', icon: '★' }, // Add here
];
```

### Modifying Colors

Edit the color values in component CSS files:

```css
.sidebar {
  background-color: #2c3e50; /* Change this */
}
```

### Adding New Components

1. Create component file in `src/components/`
2. Create corresponding CSS in `src/styles/`
3. Import and add to `App.jsx`

## 📊 Data Management

Currently, all data is hardcoded in components. To connect to a backend:

1. **Install axios:**
```bash
npm install axios
```

2. **Update components to fetch data:**
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/endpoint')
      .then(res => setData(res.data));
  }, []);

  return (/* JSX */);
}
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `dist` folder** to Netlify

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Module not found
```bash
npm install
```

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Tips

1. **Use React DevTools** - Install React DevTools browser extension for debugging
2. **Check Network Tab** - Monitor API calls and performance
3. **Use Console** - Debug with `console.log()` statements
4. **Hot Reload** - Vite automatically reloads on file changes
5. **Responsive Design** - Test with Chrome DevTools device emulation

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🤝 Contributing

To add features:

1. Create a new branch
2. Make your changes
3. Test thoroughly on all device sizes
4. Submit a pull request

---

**Built with ❤️ using Vite + React**
