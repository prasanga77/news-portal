import React, {useRef} from 'react';
import Navbar from './NavBar';
import BlogPost from './text article/mainpart';
import CommentSection from './text article/commentsection';
import Related from './text article/LatestNewsar';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Article = () => {
  const newsletterRef = useRef(null);

  const handleSubscribe = () => {
      newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="article-page">
          <Navbar onSubscribe={handleSubscribe} />
          <main>
              <BlogPost />
              <CommentSection />
              <Related />
              <div ref={newsletterRef}>
                  <Newsletter />
              </div>
          </main>
          <Footer />
      </div>
  );
};

export default Article;