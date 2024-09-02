import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginRegisterPage from './components/LoginRegisterPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/homepage';
import NewsSettler from './components/Newsletter';
import Article from './components/article';

function AppContent() {
    const newsletterRef = useRef(null);
    const location = useLocation(); // Now, this is inside the Router context

    const handleSubscribe = () => {
        newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Define pages where you don't want to show Navbar or Footer (e.g., /login)
    const hideLayout = location.pathname === '/login';

    return (
        <div className="App">
            {/* Conditionally render Navbar and Footer */}
            {!hideLayout && <Navbar onSubscribe={handleSubscribe} />}
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<Article />} />
                <Route path="/login" element={<LoginRegisterPage />} />
                {/* Add more routes as needed */}
            </Routes>

            {/* Conditionally render the newsletter and footer for all pages except login */}
            {!hideLayout && (
                <>
                    <div ref={newsletterRef}>
                        <NewsSettler />
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
