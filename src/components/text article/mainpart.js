import React from 'react';
import './mainpart.css';

const BlogPost = () => {
  return (
    <div className="blog-post">
      <div className="metadata">
        <span className="category">Innovation</span>
        <span className="time">2 Hours ago</span>
      </div>
      
      <h1 className="title">Figma ipsum component variant main layer. Auto plugin arrange create variant arrow.</h1>
      
      <div className="author">
        <img src="https://via.placeholder.com/48x48" alt="Author avatar" className="avatar" />
        <span className="author-name">Cameron Williamson</span>
      </div>
      
      <div className="engagement">
        <div className="engagement-item">
          <img src="https://via.placeholder.com/20x19" alt="Views" />
          <span>521K</span>
        </div>
        <div className="engagement-item">
          <img src="https://via.placeholder.com/20x20" alt="Comments" />
          <span>213</span>
        </div>
        <div className="engagement-item">
          <img src="https://via.placeholder.com/18x20" alt="Likes" />
          <span>80</span>
        </div>
      </div>
      
      <div className="media-container">
        {/* Placeholder for image/video */}
        <img src="https://via.placeholder.com/1024x576" alt="Blog post media" />
      </div>
      
      <div className="content-area">
        <p>
          Figma ipsum component variant main layer. Thumbnail duplicate shadow component selection duplicate overflow pen follower. Bullet auto duplicate shadow flatten move star share auto. Main image rectangle hand arrow variant. Comment inspect move line font.
        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </div>
  );
};

export default BlogPost;