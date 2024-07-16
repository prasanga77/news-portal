// NewsPage.js
import React from 'react';
import './Herotext.css';

const NewsPage = () => {
  return (
    <div className="news-page">
      <MainArticle />
      <SideArticles />
      <PopularArticles />
    </div>
  );
};

const MainArticle = () => {
  return (
    <div className="main-article">
      <div className="article-meta">
        <span className="article-category">News</span>
        <span className="article-time">2 Hours ago</span>
      </div>
      <h1 className="article-title">Lorem ipsum dolor sit amet consectetur. Nulla justo nec amet eget nisl lorem risus at nunc.</h1>
    </div>
  );
};

const SideArticles = () => {
  return (
    <div className="side-articles">
      <div className="side-article main">
        <div className="article-content">
          <p>Lorem ipsum dolor sit amet consectetur. Nulla justo nec amet eget nisl lorem risus at nunc.</p>
          <img src="/api/placeholder/120/80" alt="Article thumbnail" />
        </div>
      </div>
      <div className="side-article secondary">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <img src="/api/placeholder/120/80" alt="Article thumbnail" />
      </div>
    </div>
  );
};

const PopularArticles = () => {
  const articles = [
    { category: 'News', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { category: 'Lifestyle', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { category: 'Sports', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { category: 'World', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { category: 'Economy', title: 'Lorem ipsum dolor sit amet consectetur.' },
  ];

  return (
    <div className="popular-articles">
      <h2>Popular this week</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleItem key={index} category={article.category} title={article.title} />
        ))}
      </div>
    </div>
  );
};

const ArticleItem = ({ category, title }) => (
  <div className="article-item">
    <img src="/api/placeholder/144/104" alt={`${category} article thumbnail`} />
    <div className="article-info">
      <div className="article-meta">
        <span className="article-category">{category}</span>
        <span className="article-time">2 Hours ago</span>
      </div>
      <h3 className="article-title">{title}</h3>
    </div>
  </div>
);

export default NewsPage;