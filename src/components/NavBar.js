import React, { useState, useEffect, useRef } from 'react';
import logo from '../Images/logo.png';
import './NavBar.css';
import search_icon from '../Images/search.svg';
import icon from '../Images/dropdown.svg';
import menu_icon from '../Images/menu.svg'; 

const NavBar = ({ onSubscribe }) => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchBoxVisible(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchIconClick = () => {
    setSearchBoxVisible(!searchBoxVisible);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <nav className="navbar">
      <div className="navbar-background"></div>
      <div className="navbar-top">
        <div className="time-date">
          <div className="time">
            {currentDateTime.toLocaleTimeString()}
          </div>
          <div className="date">
            {formatDate(currentDateTime)}
          </div>
        </div>
        <div className="navbar-top-border"></div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-border"></div>
        <button className="subscribe-button" onClick={onSubscribe}>Subscribe</button>
        <div className="search-icon" onClick={handleSearchIconClick}>
          <img src={search_icon} alt="Search" />
        </div>
        {searchBoxVisible && (
          <form className="search-box" ref={searchRef} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        )}
      </div>
      <img className="logo" src={logo} alt="Logo" />
      <div className="nav-categories">
        {['National', 'International', 'Economy', 'Science', 'Health', 'Climate', 'Lifestyle', 'Sports'].map((item, index) => (
          <div 
            key={index} 
            className={`nav-category ${item === activeCategory ? 'active' : ''}`} 
            onClick={() => setActiveCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="nav-links">
        <div className="nav-link">News</div>
        <div className="more-dropdown" onClick={handleDropdownClick} ref={dropdownRef}>
          <div className="nav-link">More</div>
          <div className="down-icon">
            <img src={icon} alt="dropdown" />
          </div>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Video</div>
              <div className="dropdown-item">Author</div>
              <div className="dropdown-item">About Us</div>
            </div>
          )}
        </div>
      </div>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        <img src={menu_icon} alt="Menu" />
      </div>
      {mobileMenuVisible && (
        <div className="mobile-menu">
          <div className="mobile-nav-categories">
            {['National', 'International', 'Economy', 'Science', 'Health', 'Climate', 'Lifestyle', 'Sports'].map((item, index) => (
              <div key={index} className="mobile-nav-category">{item}</div>
            ))}
          </div>
          <div className="mobile-nav-links">
            <div className="mobile-nav-link">News</div>
            <div className="mobile-nav-link">Video</div>
            <div className="mobile-nav-link">Author</div>
            <div className="mobile-nav-link">About Us</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;