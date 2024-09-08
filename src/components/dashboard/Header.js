import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <div className="newsboard-container">
            <div className="newsboard-text-container">
                <div className="newsboard-title">Newsboard</div>
                <div className="newsboard-subtitle">Welcome back, Jon</div>
            </div>
            <div className="user-info">
                <img className="user-avatar" src="https://via.placeholder.com/64x64" alt="User Avatar" />
                <div className="user-details">
                    <div className="user-name">Jon Doe</div>
                    <div className="user-email">jondoe@jon.com</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
