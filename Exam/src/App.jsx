import './styles/Dashboard.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import QuickStats from './components/QuickStats';
import RecentActivities from './components/RecentActivities';
import UpcomingSessions from './components/UpcomingSessions';

export default function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <TopBar />
      <main className="main-content">
        <div className="content-wrapper">
          <QuickStats />
          <div className="content-grid">
            <div className="content-column">
              <RecentActivities />
            </div>
            <div className="content-column">
              <UpcomingSessions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
