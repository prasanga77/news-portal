import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Newsboard</h1>
      <div className="user-info">
        <span>Welcome back, Jon</span>
        <div className="user-details">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div>
            <p className="user-name">Jon Doe</p>
            <p className="user-email">jondoe@jon.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
