import React from 'react';
import BlogPost from './text article/mainpart';
import CommentSection from './text article/commentsection';
import Related from './homepage/forarticle';


const Article = () => {

  return (
      <div className="article-page">
          <main>
              <BlogPost />
              <CommentSection />
              <Related />
          </main>
      </div>
  );
};

export default Article;