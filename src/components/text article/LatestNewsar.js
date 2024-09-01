// LatestNews.js
import React from 'react';
import './LatestNewsar.css';

const NewsItem = ({ category, title, author, daysAgo, imageUrl }) => (
  <div className="latest-news-item">
    <div className="latest-news-image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className={`latest-news-category ${category.toLowerCase()}`}>{category}</div>
    <h3 className="latest-news-title">{title}</h3>
    <div className="latest-news-meta">
      <span className="latest-news-author">{author}</span>
      <span className="latest-news-date">{daysAgo} Days Ago</span>
    </div>
  </div>
);

const LatestNews = () => {
  const newsItems = [
    {
      category: 'Lifestyle',
      title: 'Lorem ipsum dolor sit amet consectetur. Quam vulputate magna sed risus aefg.',
      author: 'Floyd Miles',
      daysAgo: 3,
      imageUrl: 'https://via.placeholder.com/296x312'
    },
    {
      category: 'Politics',
      title: 'Lorem ipsum dolor sit amet consectetur. Sit consectetur tristique turpis fermentum.',
      author: 'Floyd Miles',
      daysAgo: 3,
      imageUrl: 'https://via.placeholder.com/296x312'
    },
    {
      category: 'Politics',
      title: 'Lorem ipsum dolor sit amet consectetur. Phasellus vestibulum facilisis aliquam nec.',
      author: 'Floyd Miles',
      daysAgo: 3,
      imageUrl: 'https://via.placeholder.com/296x312'
    },
    {
      category: 'Economy',
      title: 'Lorem ipsum dolor sit amet consectetur. Sit commodo est et massa.',
      author: 'Floyd Miles',
      daysAgo: 3,
      imageUrl: 'https://via.placeholder.com/296x312'
    },
   
  ];

  return (
    <div className="latest-news-container">
      <h2 className="latest-news-heading">Related News</h2>
      <div className="latest-news-grid">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
      <button className="latest-news-view-all">View All</button>
    </div>
  );
};

export default LatestNews;