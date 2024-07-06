import React, { useState, useEffect, useRef } from 'react';
import logo from '../Images/logo.png';
import './NavBar.css';
import search_icon from '../Images/search.svg';
import icon from '../Images/dropdown.svg';


const NavBar = () => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState(null); // Initially, no category is active
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

  // const handleSearchClick = () => {
  //   setSearchBoxVisible(!searchBoxVisible);
  // };

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchIconHover = (isHovering) => {
    if (isHovering) {
      setSearchBoxVisible(true);
    } else {
      setSearchBoxVisible(false);
    }
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
        <button className="subscribe-button">Subscribe</button>
        <div
          className="search-icon"
          onMouseEnter={() => handleSearchIconHover(true)}
          onMouseLeave={() => handleSearchIconHover(false)}
        >
          <img src={search_icon} alt="Search" />
          {searchBoxVisible && (
            <div className="custom-search-box" ref={searchRef}>
              <div className="search-icon-inner">
                <div className="search-icon-box">
                  <div className="search-icon-border"></div>
                </div>
                <div className="search-text">Search</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <img className="logo" src={logo} alt="Logo" onClick={() => window.location.href = '/'} />
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
             < img src={icon} alt="dropdown" /> 
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
    </nav>
  );
};

export default NavBar;
