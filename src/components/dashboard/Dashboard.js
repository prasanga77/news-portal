import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './Header'; 
import List from './sections/list';
import Newnews from './sections/create';
import Insights from './sections/insights';
import Settings from './sections/settings';
import './Dashboard.css'; 

function Dashboard() {

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="content-area">
          <Routes>
            <Route path="/create-news" element={<Newnews />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/listofarticles" element={<List />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
