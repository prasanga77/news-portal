import React, { useState } from 'react';
import NavBar from './NavBar'; 
import './NewsFeed.css'; 

function NewsArticle(props) {
  const [likes, setLikes] = useState(0);

  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>By: {props.author}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </article>
  );
}

function NewsFeed() {
  return (
    <div>
      <NavBar />
      <div className="news-content">
        <NewsArticle 
          title="Breaking News" 
          content="This is an important update!" 
          author="John Doe"
        />
        <NewsArticle 
          title="Tech News" 
          content="New gadget released today." 
          author="Jane Smith"
        />
      </div>
    </div>
  );
}

export default NewsFeed;