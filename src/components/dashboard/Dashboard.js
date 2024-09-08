import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './Header'; 
import List from './sections/list';
import Newnews from './sections/create';
import Insights from './sections/insights';
import Settings from './sections/settings';
import './Dashboard.css'; 

function Dashboard() {
  const location = useLocation();

  // Function to render the appropriate component based on the current route
  const renderContent = () => {
    const path = location.pathname;
    
    if (path.includes('/newsboard/create-news')) {
      return <Newnews />;
    } else if (path.includes('/newsboard/insights')) {
      return <Insights />;
    } else if (path.includes('/newsboard/listofarticles')) {
      return <List />;
    } else if (path.includes('/newsboard/settings')) {
      return <Settings />;
    } else {
      // Default component or 404 page
      return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="content-area">
          <Newnews />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;