import React from 'react';
import './CommentSection.css';

const CommentSection = () => {
  return (
    <div className="comment-section">
      <div className="comment-input">
        <img src="https://via.placeholder.com/48x48" alt="User avatar" className="avatar" />
        <textarea placeholder="Write your comment in here" className="comment-textarea" />
        <button className="commentpost-button">Post Comment</button>
      </div>
      
      {[
        { name: "Floyd Miles", days: 2 },
        { name: "Theresa Webb", days: 2 },
        { name: "Cody Fisher", days: 2 }
      ].map((commenter, index) => (
        <div key={index} className="comment">
          <div className="commenter-info">
            <img src="https://via.placeholder.com/48x48" alt={`${commenter.name} avatar`} className="avatar" />
            <span className="commenter-name">{commenter.name}</span>
            <span className="comment-time">{commenter.days} Days Ago</span>
          </div>
          <p className="comment-text">
            Figma ipsum component variant main layer. {/* Placeholder text */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;