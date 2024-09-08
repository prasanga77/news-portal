import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.css';
import logo from './logo.png'; // Ensure the path is correct

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sb-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <NavLink to="/newsboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-home"></i> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newsboard/create-news" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-create-news"></i> Create News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newsboard/insights" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-insights"></i> Insights
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newsboard/listofarticles" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-articles"></i> Articles
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <ul>
          <li className="nav-item">
            <NavLink to="/newsboard/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-settings"></i> Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-logout"></i> Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
