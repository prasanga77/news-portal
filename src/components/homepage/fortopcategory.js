import React, { useState, useRef, useEffect } from 'react';
import './Recommendation.css';

const NewsCard = ({ category, title, author, daysAgo, imageUrl }) => (
  <div className="news-card">
    <img src={imageUrl} alt={title} />
    <div className="category">{category}</div>
    <h2 className="title">{title}</h2>
    <div className="meta">
      <span className="author">{author}</span>
      <span className="days-ago">{daysAgo} Days Ago</span>
    </div>
  </div>
);

const RecommendedForYou = ({ category }) => {
  const [activePage, setActivePage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const paginationRef = useRef(null);

  const newsData = [
    {
      title: "Figma ipsum component variant main layer. Stroke inspect export effect flatten slice device.",
      author: "Floyd Miles",
      daysAgo: 3,
      imageUrl: "https://via.placeholder.com/608x376"
    },
    {
      title: "Figma ipsum component variant main layer. Effect strikethrough create device vector flatten.",
      author: "Floyd Miles",
      daysAgo: 3,
      imageUrl: "https://via.placeholder.com/608x376"
    },
    {
      title: "Figma ipsum component variant main layer. Slice font scrolling pixel invite vertical bullet.",
      author: "Floyd Miles",
      daysAgo: 3,
      imageUrl: "https://via.placeholder.com/608x376"
    },
    {
      title: "Figma ipsum component variant main layer. Prototype design system auto layout.",
      author: "Floyd Miles",
      daysAgo: 3,
      imageUrl: "https://via.placeholder.com/608x376"
    }
  ];

  const handlePageChange = (page) => {
    if (page !== activePage && page >= 1 && page <= newsData.length) {
      setIsAnimating(true);
      setActivePage(page);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (paginationRef.current) {
      const activeButton = paginationRef.current.querySelector('.active');
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const paginationRect = paginationRef.current.getBoundingClientRect();
        paginationRef.current.style.setProperty('--active-button-left', `${buttonRect.left - paginationRect.left}px`);
      }
    }
  }, [activePage]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) { // Display 4 cards
      const index = (activePage - 1 + i) % newsData.length;
      cards.push({ ...newsData[index], category, position: i });
    }
    return cards;
  };

  const getVisiblePages = () => {
    let start = Math.max(1, Math.min(activePage - 1, newsData.length - 3)); // Adjust window for 4 cards
    let end = Math.min(start + 3, newsData.length);  // End adjusted for 4 cards
    start = Math.max(1, end - 3);  // Ensure window is correct size
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="recommended-for-you">
      <div className="header">
        <h1 className="recommended-title">Recommended {category} News</h1>
        <div className="pagination" ref={paginationRef}>
          <button 
            className="arrow-button left" 
            onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : newsData.length)}
          >
            <div className="arrow left"></div>
          </button>
          {getVisiblePages().map((page) => (
            <button
              key={page}
              className={`page-button ${activePage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="arrow-button right" 
            onClick={() => handlePageChange(activePage < newsData.length ? activePage + 1 : 1)}
          >
            <div className="arrow right"></div>
          </button>
          <div className="active-indicator"></div>
        </div>
      </div>
      
      <div className="news-cards-container">
        {getVisibleCards().map((news, index) => (
          <div 
            key={index} 
            className={`news-card-wrapper position-${news.position} ${isAnimating ? 'animating' : ''}`}
          >
            <NewsCard {...news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedForYou;
