import React, { useState, useEffect, useRef } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../Images/logo.png';
import './NavBar.css';
import search_icon from '../Images/search.svg';
import icon from '../Images/dropdown.svg';
// import Homepage from './pages/Homepage'; // Correct paths to your page components
import CategoryPage from './pages/CategoryPage';
import VideoPage from './pages/VideoPage';
import AuthorPage from './pages/AuthorPage';
import AboutPage from './pages/AboutPage';

const NavBar = ({ onSubscribe }) => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation(); // To track current location

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchBoxVisible(false);
    // Implement search functionality here
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const categories = ['National', 'International', 'Economy', 'Science', 'Health', 'Climate', 'Lifestyle', 'Sports'];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-background"></div>
        <div className="navbar-top">
          <div className="time-date">
            <div className="time">{currentDateTime.toLocaleTimeString()}</div>
            <div className="date">{formatDate(currentDateTime)}</div>
          </div>
          <div className="navbar-top-border"></div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-bottom-border"></div>
          <button className="subscribe-button" onClick={onSubscribe}>Subscribe</button>
          <div className="search-icon" onClick={handleSearchIconClick}>
            <img src={search_icon} alt="Search" />
          </div>
          <form className={`search-box ${searchBoxVisible ? 'visible' : ''}`} ref={searchRef} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-submit">Search</button>
          </form>
        </div>
        <Link to="/" className="logo-link">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="nav-categories">
          {categories.map((item, index) => (
            <Link 
              key={index}
              to={`/${item.toLowerCase()}`}
              className={`nav-category ${isActive(`/${item.toLowerCase()}`) ? 'active' : ''}`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>News</Link>
          <div className="more-dropdown" onClick={handleDropdownClick} ref={dropdownRef}>
            <div className="nav-link">More</div>
            <div className="down-icon">
              <img src={icon} alt="dropdown" />
            </div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <Link to="/video" className="dropdown-item">Video</Link>
                <Link to="/author" className="dropdown-item">Author</Link>
                <Link to="/about" className="dropdown-item">About Us</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Routes setup */}
      <Routes>
        {/* Category pages */}
        <Route path="/national" element={<CategoryPage category="National" />} />
        <Route path="/international" element={<CategoryPage category="International" />} />
        <Route path="/economy" element={<CategoryPage category="Economy" />} />
        <Route path="/science" element={<CategoryPage category="Science" />} />
        <Route path="/health" element={<CategoryPage category="Health" />} />
        <Route path="/climate" element={<CategoryPage category="Climate" />} />
        <Route path="/lifestyle" element={<CategoryPage category="Lifestyle" />} />
        <Route path="/sports" element={<CategoryPage category="Sports" />} />

        {/* Routes for "More" dropdown */}
        <Route path="/video" element={<VideoPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/about" element={<AboutPage />} />

    
      </Routes>
    </>
  );
};

export default NavBar;
