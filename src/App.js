import React, { useRef } from 'react';
import LoginRegisterPage from './components/LoginRegisterPage';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/homepage';
import NewsSettler from './components/Newsletter';
import Article from './components/article';

function App() {
    const newsletterRef = useRef(null);

    const handleSubscribe = () => {
        newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar onSubscribe={handleSubscribe} />
            <Home />
            <div ref={newsletterRef}>
                <NewsSettler />
            </div>
            <Footer />
        </div>
    );
  //   return (
  //     <div className="App">
  //     <LoginRegisterPage/>
  // </div>
  //   );
}

export default App;